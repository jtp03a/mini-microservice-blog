import React, {useState} from 'react'
import axios from 'axios'

function PostCreate () {
    const [title, setTitle] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://posts-srv:4001/posts/', { title })
        } catch (err) {
            console.log(err)
        }
        setTitle('')
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default PostCreate