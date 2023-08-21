import axios from 'axios'

const API_URL = 'http://localhost:5000/api/post'
const user = JSON.parse(localStorage.getItem('user'))


const createPost = async (postData) => {

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }
    const res = await axios.post(API_URL, postData, config)

    return res.data
}

const getPosts = async () => {

    const res = await axios.get(API_URL)

    if (res.data) {
        localStorage.setItem('posts', JSON.stringify(res.data))
    }
    return res.data
}

const getUserPosts = async () => {

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    const res = await axios.get(API_URL + `/all/${user._id}`, config)

    if (res.data) {
        localStorage.setItem('userPosts', JSON.stringify(res.data))
    }
    return res.data
}

const deletePost = async(postId) => {

    const config = {
        headers: {
            'Authorization': `Bearer ${user.token}`
        }
    }

    await axios.delete(API_URL + `/${postId}`, config)

}

const postService = {
    createPost,
    getPosts,
    getUserPosts,
    deletePost
}
export default postService