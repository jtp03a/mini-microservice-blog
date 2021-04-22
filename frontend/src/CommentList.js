import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CommentList (props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments()
    }, [])
    
    const fetchComments = async () => {
        try {
            const { data } = await axios.get('https://4001-blush-nightingale-65egnev2.ws-us03.gitpod.io/posts/' + props.postId + '/comments')
            setComments(data)
        } catch (err) {
            console.log(err)
        }
    }

    const renderedComments = comments.map(comment => {
        return <li key={comment.id}>
            {comment.content}
        </li>
    })


    return (
        <div>
            <ul>
            {renderedComments}
            </ul>
  
        </div>
    )
}

export default CommentList