import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { create, reset } from '../feautres/post/postSlice'

function PostForm() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    comment: ''
  })
  const { title, category, comment } = formData
  const { isSuccess } = useSelector(state => state.post)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate('/userpanel')
  //   }
  //   dispatch(reset())
  // }, [isSuccess, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const post = {
      title: title,
      category: category,
      comment: comment
    }
    dispatch(create(post))
    document.location.reload()
  }



  return (
    <form class="form-control" onSubmit={onSubmit}>
        <div class="form-group">
        <label htmlFor="">Title:</label>
        <input 
          type="text"
          id='title'
          name='title'
          value={title}
          onChange={onChange} 
          placeholder="Please enter the title of your post"
          required
        />
        </div>

        <div class="form-group">
        <label htmlFor="">Category:</label>
        <select 
          name="category" 
          id="category"
          value={category}
          onChange={onChange}
          required
        >
            <option value="Gaming">Gaming</option>
            <option value="Television">Television</option>
            <option value="Movie">Movie</option>
        </select>
        </div>
        <div class="form-group">
        <label htmlFor="">Comment:</label>
        <textarea 
          name="comment" 
          id="comment"
          value={comment}
          onChange={onChange}
          required
        ></textarea>
        </div>
        <button>Create</button>
    </form>
  )
}

export default PostForm