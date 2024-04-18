import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./userSlice"
import moviesReducer from './moviesSlice'
import gptReducer from './gptSlice'
import toggleReducer from './toggleSlice'

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gpt: gptReducer,
        toggle: toggleReducer,
    }
})


export default appStore