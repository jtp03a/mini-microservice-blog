import React from 'react'
import axios from 'axios'

function CommentList (props) {
    const renderedComments = props.comments.map(comment => {
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