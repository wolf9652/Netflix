import {useDispatch, useSelector} from 'react-redux'
import { optionsApi } from '../utils/constants'
import { useEffect } from 'react'
import { addTrailer } from '../utils/moviesSlice'
import { toggleLoading } from '../utils/toggleSlice'

const useGetTrailer = (id) => {
    const dispatch = useDispatch();
    const Trailer = useSelector(store => store.movies.trailer)
    async function getTrailer(){
        dispatch(toggleLoading)
        try {
            const result = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, optionsApi);
            const data = await result.json();
            const trailers = data.results.filter( (video) => video.type === "Trailer");
            const trailer = trailers.length ? trailers[0] : data.results[0];
            dispatch(addTrailer(trailer))
        } catch (error) {
            console.log(error)
        }
        dispatch(toggleLoading)
    }


    useEffect( () =>{
        if(!Trailer) getTrailer();
    },[])
}

export default useGetTrailer;