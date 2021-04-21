import React, {useState} from 'react'
import axios from 'axios'

function PostCreate () {
    const [title, setTitle] = useState('')
    
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://4000-scarlet-chameleon-k4jxf6qy.ws-us03.gitpod.io/posts', { title })
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