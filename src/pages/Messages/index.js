import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import NavbarIn from "../../components/Navbar_IN";
import Footer from "../../components/Footer";

import './style.css';
import api from "../../services/api";

export default function Messages() {
  const history = useHistory() //is it necessary??
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [error, setError] = useState('')
  const [messages, setMessages] = useState([])

const getMessages = async () => {
  try {
      const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
      const { data } = await api.get("/contact/messages", config );
      if (data?.hasOwnProperty('error')) {
          return setError(data.error)
      }
      setMessages(data)
  } catch (error) {
      console.log(error)
  }
}

useEffect(() => {
  getMessages()
}, [])

return (<>
    <NavbarIn />
    <div className="timeline">
      <div className="timeline-container">
      messages
        {messages && messages.map(message => (
            <div key={message._id} className="post-container">
                <h2 className="post-title">{message.email}</h2>
                <div className="post-content">
                <p>{message.message}</p>
                <i className="smalltext">{message.createdAt}</i>
                </div>
                <hr />
            </div>
        ))}
      </div>
      </div>
    <Footer />
    <Link className="login-link" to={'/logout'}>Log out.</Link>
</>);
  }