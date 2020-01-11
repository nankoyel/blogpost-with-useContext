import React, { useState } from 'react'

export default function CreatePost ({ user, posts, dispatch }) {

    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('') 

    const handleTitle = (evt) => {
        setTitle(evt.target.value)
    }

    const handleContent = (evt) => {
        setContent(evt.target.value)
    }

    const handleCreate = () => {
        dispatch({ type: 'CREATE_POST', title, content, author: user });
    }

    return (
        <form onSubmit={e => {e.preventDefault(); handleCreate()}}>
            <div>Author: <b>{user}</b></div>
            <div>
                <label htmlFor="create-title">Title:</label>
                <input type="text" 
                name="create-title"
                value={title} 
                onChange={handleTitle}
                id="create-title" />
            </div>
            <textarea 
             value={content} 
             onChange={handleContent}
            />
            <input type="submit" value="Create" />
        </form>
    )
}