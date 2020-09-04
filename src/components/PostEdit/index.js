import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../services/api";

import './style.css'

export default function PostEdit() {
    const history = useHistory()
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [title, setTitle] = useState('')
    const [post, setPost] = useState('')
    const [tags, setTags] = useState('')
    const [error, setError] = useState(null)

    const handlePostSubmit = async () => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            const { data } = await api.post("/posts/create", {
                title: title, content: post, tags: tags
            }, config);
            if (data?.hasOwnProperty('error')) {
                return setError(data.error)
            }
            console.log(title, post, tags)
            history.push('/posts')
        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <div className="editor-container">
            <h3 className="">post editor</h3>
            <form className="post-editor">
                <input type="text" className="editor-field" placeholder="title" required onChange={(e) => setTitle(e.target.value)} />
                <input type="textarea" className="content-window" placeholder="..." required onChange={(e) => setPost(e.target.value)} />
                <input type="text" className="editor-field" placeholder="tags" required onChange={(e) => setTags(e.target.value)} />
                <button className="" type="button" onClick={() => handlePostSubmit()}>POST IT.</button>
                {error && <span>{error?.message}</span>}
            </form>
        </div>
    </>);
}