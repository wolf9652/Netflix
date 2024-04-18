import { optionsApi } from '../utils/constants'
import {useDispatch, useSelector} from "react-redux"
import { addnowPlayingMovies } from '../utils/moviesSlice'
import { useEffect } from 'react'
import { toggleLoading } from '../utils/toggleSlice'

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
    async function getNowPlayingMovies(){
      dispatch(toggleLoading)
      try {
        const movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', optionsApi)
        const data = await movies.json()
        dispatch(addnowPlayingMovies(data.results))
      } catch (error) {
        console.log(error)
      }
      dispatch(toggleLoading)
    }
  
    useEffect( () =>{
      if(!nowPlayingMovies) getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;