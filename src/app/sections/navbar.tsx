'use client';


import { ImageContext } from '@/context/photo_context'
import React ,{ ChangeEvent, useContext} from 'react'
import { FaImages } from "react-icons/fa";

const Navbar = () => {

    const {setImage} =useContext<any>(ImageContext)

    
    const onChangeHanlder=(e: ChangeEvent<HTMLInputElement>)=>{
        setImage(e)
    }
  return (
    <div className='relative z-2 navbar flex justify-between items-center px-4 md:px-12 py-3 '>

        <h1 id='text_logo'>Palette Gen</h1>
        <div className='file_uploaded' >
            <FaImages  />
            <label htmlFor="image_upload">Upload Image</label>
            <input type='file' id='image_upload' accept="image/*" hidden onChange={onChangeHanlder}/>
        </div>
    </div>
  )
}

export default Navbar