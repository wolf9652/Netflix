import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        trendingMovies: null,
        trendingShows: null,
    },
    reducers: {
        addnowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state,action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload;
        },
        addTrendingMovies: (state,action) => {
            state.trendingMovies = action.payload;
        },
        addTrendingShows: (state,action) => {
            state.trendingShows = action.payload;
        },
        addTrailer: (state,action) => {
            state.trailer = action.payload;
        }
    }
})

export default moviesSlice.reducer;
export const { addnowPlayingMovies,addTrailer,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addTrendingMovies,addTrendingShows } = moviesSlice.actions;