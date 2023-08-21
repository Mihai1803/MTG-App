import { configureStore } from "@reduxjs/toolkit"
import authReducer from '../feautres/auth/authSlice'
import postReducer from '../feautres/post/postSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postReducer
    }
})