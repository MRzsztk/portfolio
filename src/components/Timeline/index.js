import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import './style.css';
import api from "../../services/api";

export default function Timeline() {
  const history = useHistory() //is it necessary??
  const [error, setError] = useState('')
  const [posts, setPosts] = useState([])

const getPosts = async () => {
  try {
      const { data } = await api.get("/posts");
      if (data?.hasOwnProperty('error')) {
          return setError(data.error)
      }
      setPosts(data)
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  getPosts()
}, [])

    return (
      <div className="timeline">
      <div className="timeline-container">
        {posts.map(post => (
            <div key={post._id} className="post-container">
                <i className="post-date smalltext">{post.createdAt.split('T')[0]}</i>
                <h2 className="post-title margin-5">{post.title}</h2>
                <div className="post-content margin-5">
                <p className="margin-5">{post.content}</p>
                </div>
                <hr />
            </div>
        ))}
      </div>
      </div>
    );
  }