import { optionsApi } from '../utils/constants'
import {useDispatch, useSelector} from "react-redux"
import { addTrendingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { toggleLoading } from '../utils/toggleSlice'

const useTrendingMovies = () =>{
    const dispatch = useDispatch()
    const trendingMovies = useSelector(store => store.movies.trendingMovies)
    async function getTrendingMovies(){
      dispatch(toggleLoading)
      try {
        const movies = await fetch('https://api.themoviedb.org/3/trending/movie/day', optionsApi)
        const data = await movies.json()
        dispatch(addTrendingMovies(data.results))
      } catch (error) {
        console.log(error)
      }
      dispatch(toggleLoading)
    }
  
    useEffect( () =>{
      if(!trendingMovies) getTrendingMovies();
    }, [])
}

export default useTrendingMovies;