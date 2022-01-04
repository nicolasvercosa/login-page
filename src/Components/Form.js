import React, { useState, useRef } from 'react';
import user_icon from '../Assets/user-circle-regular.svg'
import password_icon from '../Assets/unlock-alt-solid.svg'
import './Login.css'

export default function Form() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function SendForm() {

       
    }


    return (
        <form onSubmit={SendForm}>
            <label className="box">
                <span className="username">Username</span>
                <input
                    className="username_input"
                    type="text"
                    placeholder="username, email or phone number"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    autoComplete='current-username'
                />
                <img className="user_icon" src={user_icon} />
            </label>
            <label className="box">
                <span className="password">Password</span>
                <input
                    className="password_input"
                    type="password"
                    placeholder="••••••••••"
                    value={password}
                    autoComplete='current-password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <img className="password_icon" src={password_icon} />
            </label>
                <label className='remember_me'>
                    <input type="checkbox" /> <span className='remberme_text'>Remember me</span>
                    <span className='checkmark'></span>    
                </label>
            <div className="box">
                <button className="signin_btn" type="submit" onClick={SendForm}>Sign In</button>
            </div>
        </form>
    )
}