import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { optionsApi, posterUrl } from '../utils/constants'
import { addCast, movieDetailToggle, toggleLoading } from '../utils/toggleSlice'
import { FaPlay } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const MovieDetail = () => {
    const movie = useSelector( (store) => store.toggle.details)
    const dispatch = useDispatch();
    const casts = useSelector( (store) => store.toggle.casts)

    
    async function getCredits(){
        dispatch(toggleLoading)
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/'+ movie.id + '/credits?language=en-US', optionsApi)
            const results = await data.json();
            dispatch(addCast(results.cast.slice(0,2)))
        } catch (error) {
            console.log(error)
        }
        dispatch(toggleLoading)
    }

    function handleCancel(){
        dispatch(movieDetailToggle())
    }

    useEffect( () => {
        getCredits()
    },[])


  return (
    <div className='text-white w-[60%] h-max-content flex flex-col fixed items-center bg-black bg-opacity-40 p-4 z-30 top-1 right-[20%] '>
            <div className='w-[70%] flex items-center justify-center'>
                <img 
                    src={posterUrl + movie.backdrop_path} 
                    alt={movie.original_title}
                    className=' w-full relative'
                />
                <div className=' absolute top-1 right-1'>
                    <button onClick={handleCancel}>
                        <RxCross1 size={30}/>
                    </button>
                </div>
            </div>
            <div className='mx-4'>
                <h3 className='font-bold text-3xl py-2'>{movie.original_title}</h3>
                <p className=' text-lg pb-4'>
                    {
                        movie.overview.length>200 ? (movie.overview.substr(0,200) + "...") : (movie.overview)
                    }
                </p>
                <p className=' text-lg pb-4'>
                    Casts: 
                    {
                        casts?.map( (cast) => (
                            <span key={cast.cast_id}>{cast.name} </span>
                        ))
                    }
                </p>
                <p className=' text-lg pb-4'>Release Date: {movie.release_date}</p>
                <button
                    className='px-4 md:px-8 w-full flex items-center justify-center gap-2 mt-1 md:mt-0 md:text-lg font-bold bg-[#d9232e] text-white rounded-md h-12 hover:bg-white hover:text-[#d9232e] transition-all'
                >
                    <FaPlay/>Play
                </button>
            </div>
    </div>
  )
}

export default MovieDetail