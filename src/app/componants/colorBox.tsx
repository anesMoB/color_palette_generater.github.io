

import React from 'react'

interface colorBoxProps{
    color: string
}
const ColorBox = ({color}:colorBoxProps) => {
    const style={
        backgroundColor:color
    }
    const handleCopyColor = async () => {
        await navigator.clipboard.writeText(color);
        alert(`Copied ${color} to clipboard!`);
      };
  return (
    <div
    onClick={handleCopyColor}
    style={style} 
    className={`colorBox lg:w-[200px] lg:h-[200px]  md:w-[180px] md:h-[180px]  w-[150px] h-[150px] rounded-xl cursor-pointer flex justify-center items-center text-white font-bold text-xl`}>{color}</div>
  )
}

export default ColorBox