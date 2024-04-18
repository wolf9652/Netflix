import React from 'react'
import {useSelector} from 'react-redux'
import MoviesList from './MoviesList'
import MovieDetail from './MovieDetail'

const SecondaryContainer = () => {
  const movies = useSelector( (store) => store.movies)
  return (
    movies.nowPlayingMovies &&(<div className='bg-black'>
      <div className=' md:-mt-40 relative z-20 pl-4 md:pl-12'>
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MoviesList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MoviesList title={"Popular"} movies={movies.popularMovies}/>
        <MoviesList title={"Trending Movies"} movies={movies.trendingMovies}/>
        <MoviesList title={"Trending Tv Shows"} movies={movies.trendingShows}/>
        <MoviesList title={"Upcoming"} movies={movies.upcomingMovies}/>

        {
          
        }
      </div>
    </div>)
  )
}

export default SecondaryContainer