'use client';
import React, {ChangeEvent, createContext,useState,useEffect } from "react";
import ColorThief from 'colorthief';
import { usePalette } from 'color-thief-react'


export const ImageContext=React.createContext(null);

export function ImageProvider ({
    children,
  }: {
    children: React.ReactNode
  }){
    const [image, setImage] = useState<string | null>();
    const [colorPalette, setColorPalette] = useState<string[] | null>();
    const { data, loading, error } = usePalette(image as string, 5, "hex")
    const imagePickerOnChangeHandler=(e: ChangeEvent<HTMLInputElement>)=>{
      const file = e.target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string)
          const img = new Image();
          img.src = reader.result as string;
          
          img.onload = () => {
           

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
        console.log(data)
       setColorPalette(data);
      }
    }, [data])
    
  

    return (
     <ImageContext.Provider value={{image:image,colorPalette:colorPalette,setImage:imagePickerOnChangeHandler}}>
            {children}
      </ImageContext.Provider>
  )
}

