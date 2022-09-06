import React from 'react'
import { useSelector } from "react-redux"

export default function Login(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;

    return (
        <div className="div-container">
            <h1>Hey, {userInfo.firstName} {userInfo.lastName} ^_^</h1>
            <p>Thank you for being our valued customer!</p>
            <p id="welcome-message">Have a nice day ^^</p>
        </div>
    )
}