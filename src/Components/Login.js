import { useState } from 'react';
import  Form  from './Form.js'
import './Login.css'

export default function Login() {
    return (
        <div className="login_box">
            <div className="login">
                <span className="loginText">Login</span>
                <div className="signup_box">
                    <span className="dont_have_account">Don't have an account? </span>
                    <a href="" className="signup"> Sign up </a>
                </div>
            </div>
            <Form />
        </div>
    )
}