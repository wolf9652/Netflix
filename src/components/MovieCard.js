import React from 'react'
import { posterUrl } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addMovieDetail, movieDetailToggle } from '../utils/toggleSlice';

const MovieCard = ({movie}) => {
  const posterPath = posterUrl + movie.poster_path;
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(movieDetailToggle())
    dispatch(addMovieDetail(movie))
  }

  if(movie.poster_path === null) return (
    <div className='flex items-center justify-center border border-white bg-black text-white w-48 pr-4 mr-4 text-center'>
      {movie.title}
    </div>
  );
  return (
    <div 
      className=' w-48 pr-4'
      onClick={handleClick}
    >
        <img src={posterPath} alt=''/>
    </div>
  )
}

export default MovieCard