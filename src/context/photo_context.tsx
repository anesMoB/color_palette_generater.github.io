'use client';
import React, {ChangeEvent, createContext,useState,useEffect } from "react";
import { usePalette } from 'color-thief-react'

interface ImageContextProps {
  image: string | null;
  colorPalette: string[] | null;
  setImage: (e: ChangeEvent<HTMLInputElement>) => void;
}

const defaultImageContextValues: ImageContextProps = {
  image: null,
  colorPalette: null,
  setImage: () => {}, // Provide a default empty function
};

export const ImageContext = createContext<ImageContextProps>(defaultImageContextValues);

interface ImageProviderProps {
  children: React.ReactNode;
}

/* export const ImageContext=React.createContext(null);
 */
export function ImageProvider ({
    children,
  }: ImageProviderProps){
    const [image, setImage] = useState<string | null>(null);
    const [colorPalette, setColorPalette] = useState<string[] | null>(null);
    const { data, loading, error } = usePalette(image as string, 6, "hex")
    const imagePickerOnChangeHandler=(e: ChangeEvent<HTMLInputElement>)=>{
      const file = e.target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string)
          const img = new Image();
          img.src = reader.result as string;
          
          img.onload = () => {
           return null;

         /*    const colorThief = new ColorThief();
            const colorPalette = colorThief.getPalette(img, 5);
            setColorPalette(colorPalette);
 */
          };
       
        };
       
        reader.readAsDataURL(file);
      }
   
    }

    useEffect(() => {
      if(image){
        if(data){
          console.log(data)
         setColorPalette(data);
        }
      }
    }, [data])
    
  

    return (
     <ImageContext.Provider value={{image:image,colorPalette:colorPalette,setImage:imagePickerOnChangeHandler}}>
            {children}
      </ImageContext.Provider>
  )
}

