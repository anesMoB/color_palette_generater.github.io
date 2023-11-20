'use client';
import React, {ChangeEvent, createContext,useState } from "react";
import ColorThief from 'colorthief';


export const ImageContext=React.createContext();

export function ImageProvider ({
    children,
  }: {
    children: React.ReactNode
  }){
    const [image, setImage] = useState<string | null>();
    const [colorPalette, setColorPalette] = useState();

    const imagePickerOnChangeHandler=(e: ChangeEvent<HTMLInputElement>)=>{
      const file = e.target.files?.[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImage(reader.result as string)
          const img = new Image();
          img.src = reader.result as string;
          img.onload = () => {
            const colorThief = new ColorThief();
            const colorPalette = colorThief.getPalette(img, 5);
            setColorPalette(colorPalette);

            //console.log(colorPalette)
          };
       
        };
        reader.readAsDataURL(file);
      }
   
    }
    return (
     <ImageContext.Provider value={{image:image,setImage:imagePickerOnChangeHandler,colorPalette:colorPalette}}>
            {children}
      </ImageContext.Provider>
  )
}

