import React, {useState} from 'react'
import axios from 'axios'

function CommentCreate (props) {
    const [content, setContent] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://4001.cs.jakepeterson.dev/posts/' + props.postId + '/comments', { content })
        } catch (err) {
            console.log(err)
        }
        setContent('')
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>New Comment</label>
                    <input value={content} onChange={e => setContent(e.target.value)} className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default CommentCreate