import React from 'react'

function PostForm() {
  return (
    <form class="form-control">
        <div class="form-group">
        <label htmlFor="">Title:</label>
        <input type="text" placeholder="Please enter the title of your post"/>
        </div>

        <div class="form-group">
        <label htmlFor="">Category:</label>
        <select name="" id="">
            <option value="">Gaming</option>
            <option value="">Television</option>
            <option value="">Movie</option>
        </select>
        </div>
        <div class="form-group">
        <label htmlFor="">Comment:</label>
        <textarea name="" id=""></textarea>
        </div>
        <button>Create</button>
    </form>
  )
}

export default PostForm