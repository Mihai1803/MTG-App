import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getUserPosts, deletePost, reset} from '../feautres/post/postSlice'

function PostList() {

  const { user } = useSelector(state => state.auth)
  const { post, frontPost, isLoading, isError, isSuccess, message} = useSelector(state => state.post)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      console.log('Error');
    }
    dispatch(getPosts())
    dispatch(getUserPosts())
    dispatch(reset())
  }, [isError, dispatch])


  const onDelete = (postId) => {
    dispatch(deletePost(postId))
    dispatch(getPosts())
    dispatch(getUserPosts())
  }

  return (
    <section id="post">
        <div className="container">       
            <div className="post-main">
                {isLoading ? (
                  <p>Loading...</p>
                ) : isError ? (
                  <p>Error...</p>
                ) : (
                  <>
                    {
                      !user ?  
                      (
                        frontPost.map((post, index) => {
                          const date = new Date(post.createdAt)
                          const year = date.getFullYear()
                          const month = date.getMonth() + 1
                          const day = date.getDate()
                    
                          return (
                            <div className="post-box" key={index}>
                              <div className="box-heading">
                                  <img src="./img/gaming2.jpg" alt="" className='box-img' />
                                  <div className="box-ut">
                                    <h1>{post.title}</h1>
                                    <h4>Mihai Sefu</h4>
                                  </div>
                              </div>
                              <div className="box-info">
                                <div className="box-category">{post.category}</div>
                                <div className="box-date">{`${day}/${month < 10 ? `0${month}` : month}/${year}`}</div>
                              </div>
                              <p>{post.comment}</p>
                              {/* <Link href="#">Read More</Link> */}
                            </div>
                          )
                        })
                      ) :
                      (
                        post.map((post, index) => {
                          const date = new Date(post.createdAt)
                          const year = date.getFullYear()
                          const month = date.getMonth() + 1
                          const day = date.getDate()
                    
                          return (
                            <div className="post-box" key={index}>
                              <div className="box-heading">
                                  <img src="./img/gaming2.jpg" alt="" className='box-img' />
                                  <div className="box-ut">
                                    <h1>{post.title}</h1>
                                    <h4>Mihai Sefu</h4>
                                  </div>
                              </div>
                              <div className="box-info">
                                <div className="box-category">{post.category}</div>
                                <div className="box-date">{`${day}/${month < 10 ? `0${month}` : month}/${year}`}</div>
                              </div>
                              <p>{post.comment}</p>
                              <button onClick={() => onDelete(post._id)}>Delete post</button>
                            </div>
                          )
                        })
                      )
                      }
                  </>
                )
                }
            </div>
        </div>
    </section>
  )
}

export default PostList