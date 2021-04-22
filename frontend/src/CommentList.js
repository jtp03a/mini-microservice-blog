import React from 'react'
import axios from 'axios'

function CommentList (props) {
    const renderedComments = props.comments.map(comment => {
        let filteredComment
        if (comment.status === 'pending') {
            filteredComment = 'Comment Pending'
        }

        if (comment.status === 'rejected') {
            filteredComment = 'Comment Rejected'
        }

        if (comment.status === 'approved') {
            filteredComment = comment.content
        }
        
        return <li key={comment.id}>
            {filteredComment}
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