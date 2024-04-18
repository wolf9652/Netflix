import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' pt-[20%] px-6 md:px-24 bg-gradient-to-r from-black text-white relative w-screen aspect-video z-10'>
        <h1 className='text-2xl md:text-5xl font-bold'>{title}</h1>
        <p className=' hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
        <div className='flex gap-4'>
            <button className='px-4 md:px-8 flex items-center gap-2 mt-1 md:mt-0 md:text-lg font-bold bg-white text-black rounded-md h-12 hover:bg-opacity-80'>
                <FaPlay />Play
            </button>
            <button className=' hidden md:flex px-8 items-center gap-2 text-lg font-bold bg-gray-500 text-white rounded-md h-12 bg-opacity-50'>
                <IoMdInformationCircleOutline />More info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle