import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        movieDetail: false,
        details: null,
        casts: null,
        loading: false
    },
    reducers: {
        movieDetailToggle: (state) => {
            state.movieDetail = !state.movieDetail;
        },
        addMovieDetail: (state,action) => {
            state.details = action.payload;
        },
        addCast: (state,action) => {
            state.casts = action.payload;
        },
        toggleLoading: (state) => {
            state.loading = !state.loading;
        }
    }
})

export default toggleSlice.reducer;
export const { movieDetailToggle,addMovieDetail,addCast,toggleLoading } = toggleSlice.actions;