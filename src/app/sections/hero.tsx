'use client';
import { FaImages } from "react-icons/fa";
import React ,{ useContext} from 'react'
import { ImageContext } from "@/context/photo_context";
import Image from "next/image";
import rgbHex from "rgb-hex";
import ColorBox from "../componants/colorBox";



const Hero = () => {
    const toHex = (value: number): string => {
        const hex = value.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      };

   /* const rgbToHex = (r: number, g: number, b: number): string => {
         const toHex = (value: number): string => {
          const hex = value.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        }; 
        const hex=`#${toHex(r)}${toHex(g)}${toHex(b)}`;
       // console.log(hex)
        return hex;
      };*/

 const {image,colorPalette} = useContext<any>(ImageContext)
  return (
    <div className="relative flex flex-col lg:flex-row justify-around items-center gap-8 px-4 py-2 lg:px-20 lg:py-10 min-h-[85vh]">
        {image==undefined ? 
        <div className="text-9xl" >
        <FaImages  />
        </div>
        : <>
           <div className="flex flex-row justify-center items-center max-md:py-10"> 
           <Image 
            className="imageBox rounded-xl w-[500px] h-[600px]"
            src={image} alt={"image"}  width={500} height={500} />
            </div>
            
            <div className="flex justify-center items-center flex-wrap max-md:pb-10 gap-8 lg:w-[50%]">
            { colorPalette && (
                colorPalette.map((color:number[], index:number) => {
                    let colorHex ='#';
                    color.map((colorRGB)=>{
                        colorHex +=toHex(colorRGB)
                    })
                    return <div key={index} >
                        <ColorBox color={colorHex}/>
                    </div>
                })
            ) }
           
                
                
            </div>
        </>
        }
      

    </div>
  )
}

export default Hero
