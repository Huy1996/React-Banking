import React from 'react'
import { useSelector } from 'react-redux'
import {  Navigate } from 'react-router-dom';

export default function Private({children}) {
    const userSignin = useSelector(state => state.userSignin);
    const { userLogin } = userSignin;
    return userLogin ? children : <Navigate to="/signin" />
}
