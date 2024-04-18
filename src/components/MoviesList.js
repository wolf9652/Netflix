import React from 'react'
import MovieCard from './MovieCard'
import MovieDetail from './MovieDetail';
import { useSelector } from 'react-redux';

const MoviesList = ({title,movies}) => {
    const detailToggle = useSelector( (store) => store.toggle)
  return (
    <div className='p-6'>
        <h1 className='font-bold text-lg text-white py-4'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar'>
            <div className='flex item-center justify-center'>
                {
                    movies?.map( (movie) => (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))
                }
                {
                    detailToggle.movieDetail ? (<MovieDetail/>) : (<div></div>)
                }
            </div>
        </div>
    </div>
  )
}

export default MoviesList