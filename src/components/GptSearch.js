import React, { useRef } from 'react'
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import openai from "../utils/openAi";
import { optionsApi } from '../utils/constants';
import { addGptMovies } from '../utils/gptSlice';
import { FaSearch } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { searchToggle } from '../utils/gptSlice';
import { toggleLoading } from '../utils/toggleSlice';

const GptSearch = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const searchInput = useRef();

    function handleBack() {
        dispatch(searchToggle())
    }

    async function searchMovie(movie) {
        dispatch(toggleLoading)
        try {
            const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', optionsApi)
            const json = await data.json();

            return json.results;

        } catch (error) {
            console.log(error)
        }
        dispatch(toggleLoading)
    }

    async function handleSearch(event) {
        event.preventDefault();
        dispatch(toggleLoading)
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: "
                            + searchInput.current.value +
                            ". only give me names of 5 movies, comma seperated like the example result given ahead. Example result: Gadar, Sholay, Golmaal, Don, Koi Mil Gaya"

        const searchResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
          
        const gptMovies = searchResults.choices?.[0]?.message?.content.split(", ");

        // search for each movie
        const promisesArray = gptMovies.map( (movie) => searchMovie(movie));   //this 5 promises for each array

        // now extracting data from each promise
        const tmdbResults = await Promise.all(promisesArray);

        dispatch(addGptMovies({movieName: gptMovies,movieResult: tmdbResults}));

        dispatch(toggleLoading)
        navigate("/search")
    }
    

  return (
    <div className='absolute z-30 bg-black bg-opacity-75 w-screen h-[50%]'>
        <button className='text-white mt-5 ml-5'
            onClick={handleBack}
        >
            <IoChevronBack size={40}/>
        </button>
        <form className='flex flex-col justify-center items-center mt-10 gap-6'
            onSubmit={handleSearch}
        >
            <input 
                type='text' 
                className=' bg-black bg-opacity-50 text-white text-lg border border-white w-[90%] px-7 py-5 rounded-3xl' 
                placeholder='What are you looking for?'
                ref={searchInput}
            />
            <button className=' bg-gray-500 bg-opacity-50 w-[50%] py-2 text-white text-lg font-bold flex items-center justify-center gap-2 rounded-3xl'>
                Search <FaSearch/>
            </button>
        </form>
    </div>
  )
}

export default GptSearch