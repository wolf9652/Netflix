import {createSlice} from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptSearch: false,
        movieResult: null,
        movieName: null
    },
    reducers: {
        searchToggle: (state) => {
            state.gptSearch = !state.gptSearch;
        },
        addGptMovies: (state,action) => {
            const {movieName,movieResult} = action.payload;
            state.movieResult = movieResult;
            state.movieName = movieName;
        }
    }
})

export default gptSlice.reducer;
export const { searchToggle,addGptMovies } = gptSlice.actions;