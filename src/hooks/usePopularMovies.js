import { optionsApi } from '../utils/constants'
import {useDispatch, useSelector} from "react-redux"
import { addPopularMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { toggleLoading } from '../utils/toggleSlice'

const usePopularMovies = () =>{
    const dispatch = useDispatch()
    const popularMovies = useSelector(store => store.movies.popularMovies)
    async function getPopularMovies(){
      dispatch(toggleLoading)
      try {
        const movies = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', optionsApi)
        const data = await movies.json()
        dispatch(addPopularMovies(data.results))
      } catch (error) {
        console.log(error)
      }
      dispatch(toggleLoading)
    }
  
    useEffect( () =>{
      if(!popularMovies) getPopularMovies();
    }, [])
}

export default usePopularMovies;