import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from "../../services/api";
import Mail from "../../assets/envelope.gif";

import './style.css'

export default function SendMeAMessage() {
    const history = useHistory()
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const [sent, setSent] = useState('')

    const handleMessageSubmit = async () => {
        try {
            const { data } = await api.post("/contact/messages", {
                message: message, email: email
            });
            setSent('Your message has been sent.')
            if (data?.hasOwnProperty('error')) {
                return setError(data.error)
            }
            history.push('/contact')

        } catch (error) {
            console.log(error)
        }
    }

    return (<>
        <div className="message-container">
            <p className="VT323 margin-5">Send me a message.</p>
            <form className="message-editor margin-5">
                <input name="email" type="text" className="email-field" placeholder="your email address" required onChange={(e) => setEmail(e.target.value)} />
                <textarea name="message" wrap="soft" className="message-window margin-5" placeholder="your message" required onChange={(e) => setMessage(e.target.value)} />
                <button className="margin-5" type="button" onClick={() => handleMessageSubmit()}>SEND IT.</button>
                {error && <span>{error?.message}</span>}
                {sent && <span>{sent}</span>}
            </form>
        </div>
    </>);
}