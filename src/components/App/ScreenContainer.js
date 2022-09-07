import React from 'react'
import {Route, Routes} from "react-router-dom";
import Private from "../Secure Route/Private";
import Login from "../../screens/Login";
import Welcome from "../../screens/Welcome"
import Register from "../../screens/Register";

export default function ScreenContainer(props) {
    return (
        <Routes>
            <Route path="/" element={<Private><Welcome/></Private>} />
            <Route path="/signin"  element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
}