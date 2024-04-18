import { optionsApi } from '../utils/constants'
import {useDispatch, useSelector} from "react-redux"
import { addUpcomingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { toggleLoading } from '../utils/toggleSlice'

const useUpcomingMovies = () =>{
    const dispatch = useDispatch()
    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)
    async function getUpcomingMovies(){
      dispatch(toggleLoading)
      try {
        const movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', optionsApi)
        const data = await movies.json()
        dispatch(addUpcomingMovies(data.results))
      } catch (error) {
        console.log(error)
      }
      dispatch(toggleLoading)
    }
  
    useEffect( () =>{
      if(!upcomingMovies) getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;