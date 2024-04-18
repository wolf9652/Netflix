import React from 'react'
import {useSelector} from 'react-redux'
import useGetTrailer from '../hooks/useGetTrailer';


const VideoBackground = ({id}) => {

    const trailerVideo = useSelector( store => store.movies?.trailer);
    
    useGetTrailer(id);
    
  return (
    <div className='w-screen absolute z-0 top-0'>     
        <iframe 
            className='w-screen aspect-video' 
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1&mute=1"} 
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
    </div>
  )
}

export default VideoBackground