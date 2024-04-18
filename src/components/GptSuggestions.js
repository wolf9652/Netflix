import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const GptSuggestions = () => {
  const {movieName,movieResult} = useSelector(store => store.gpt)
  if(!movieName) return null;
  console.log(movieName)
  console.log(movieResult)
  return (
    <div className=' p-4 bg-black text-white pt-44 md:pt-24'>
      {
        movieName.map( (movie,index) => (
          <MoviesList
            key={movie}
            title={movie}
            movies={movieResult[index]}
          />
        ))
      }
    </div>
  )
}

export default GptSuggestions