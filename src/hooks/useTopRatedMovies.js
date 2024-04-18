import { optionsApi } from '../utils/constants'
import {useDispatch, useSelector} from "react-redux"
import { addTopRatedMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { toggleLoading } from '../utils/toggleSlice'

const useTopRatedMovies = () =>{
    const dispatch = useDispatch()
    const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
    async function getTopRatedMovies(){
      dispatch(toggleLoading)
      try {
        const movies = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', optionsApi)
        const data = await movies.json()
        dispatch(addTopRatedMovies(data.results))
      } catch (error) {
        console.log(error)
      }
      dispatch(toggleLoading)
    }
  
    useEffect( () =>{
      if(!topRatedMovies) getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;