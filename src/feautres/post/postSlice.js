import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import postService from "./postService"


const post = JSON.parse(localStorage.getItem('post'))
const userPosts = JSON.parse(localStorage.getItem('userPosts'))
const user = JSON.parse(localStorage.getItem('user'))



const initialState = {
    post: userPosts ? userPosts : null,
    frontPost: post ? post : null,
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: true,
    message: ''
}

export const create = createAsyncThunk('post/create', async(post, thunkAPI) => {
    try {
        return await postService.createPost(post)
    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) 
        ||
        error.message
        ||
        error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const getPosts = createAsyncThunk('post/get', async(thunkAPI) => {
    try {
        return await postService.getPosts()
    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) 
        ||
        error.message
        ||
        error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})
export const getUserPosts = createAsyncThunk('post/get/all', async(thunkAPI) => {
    try {
        return await postService.getUserPosts()
    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) 
        ||
        error.message
        ||
        error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})
export const deletePost = createAsyncThunk ('post/delete', async(postId, thunkAPI) => {
    try {
        return await postService.deletePost(postId)
    } catch (error) {
        const message = 
        (error.response && error.response.data && error.response.data.message) 
        ||
        error.message
        ||
        error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(create.pending, (state) => {
                state.isLoading = true
            })
            .addCase(create.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.post = action.payload
            })
            .addCase(create.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.post = null
            })
            .addCase(getPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.frontPost = action.payload
            })
            .addCase(getPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            })
            .addCase(getUserPosts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUserPosts.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
                state.post = action.payload
            })
            .addCase(getUserPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
                state.message = action.payload
            }) 
            .addCase(deletePost.fulfilled, (state) => {
                state.isLoading = false
                state.isError = false
                state.isSuccess = true
            })
            .addCase(deletePost.rejected, (state) => {
                state.isLoading = false
                state.isError = true
                state.isSuccess = false
            })
    }
})

export const { reset } = postSlice.actions
export default postSlice.reducer