import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CommentList from './CommentList'
import CommentCreate from './CommentCreate'


function PostList () {
    const [posts, setPosts] = useState({})

    useEffect(() => {
        fetchPosts()
    }, [])
    
    const fetchPosts = async () => {
        try {
            const { data } = await axios.get('https://4000-blush-nightingale-65egnev2.ws-us03.gitpod.io/posts')
            setPosts(data)
        } catch (err) {
            console.log(err)
        }
    }

    const renderedPost = Object.values(posts).map(post => {
        return <div className="card" key={post.id} style={{width: '30%', marginBottom: '20px'}}> 
            <div className="card-body">
                <h3>{post.title}</h3>
                <CommentList postId={post.id} />
                <CommentCreate postId={post.id} />
  
            </div>

        </div>
    })
    
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {renderedPost}
        </div>
    )
}

export default PostList