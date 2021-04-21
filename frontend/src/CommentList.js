import React, {useState, useEffect} from 'react'
import axios from 'axios'

function CommentList (props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments()
    }, [])
    
    const fetchComments = async () => {
        try {
            const { data } = await axios.get('https://4001-scarlet-chameleon-k4jxf6qy.ws-us03.gitpod.io/posts/' + props.postId + '/comments')
            setComments(data)
        } catch (err) {
            console.log(err)
        }
    }

    const renderedComments = comments.map(comment => {
        return <div>
            {comment.content}
        </div>
    })


    return (
        <div>
            {renderedComments}
        </div>
    )
}

export default CommentList