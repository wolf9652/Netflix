import { optionsApi } from '../utils/constants'
import {useDispatch, useSelector} from "react-redux"
import { addTrendingShows } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { toggleLoading } from '../utils/toggleSlice'

const useTrendingShows = () =>{
    const dispatch = useDispatch()
    const trendingShows = useSelector(store => store.movies.trendingShows)
    async function getTrendingShows(){
      dispatch(toggleLoading)
      try {
        const movies = await fetch('https://api.themoviedb.org/3/trending/tv/day', optionsApi)
        const data = await movies.json()
        dispatch(addTrendingShows(data.results))
      } catch (error) {
        console.log(error)
      }
      dispatch(toggleLoading)
    }
  
    useEffect( () =>{
      if(!trendingShows) getTrendingShows();
    }, [])
}

export default useTrendingShows;