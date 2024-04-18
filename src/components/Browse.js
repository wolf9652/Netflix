import React from 'react'
import {useSelector} from "react-redux"
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import useTrendingShows from '../hooks/useTrendingShows';
import GptSearch from './GptSearch';


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTrendingShows();

  const search = useSelector( (store) => store.gpt.gptSearch)
  

  return (
    <div className=' w-screen h-max-content'>
    {
      search ? (
        <>
          <GptSearch/>
        </>
        ) : (
          <></>
        )
    }
    <MainContainer/>
    <SecondaryContainer/>
    </div>
  )
}

export default Browse