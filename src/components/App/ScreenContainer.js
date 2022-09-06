import React from 'react'
import {Route, Routes} from "react-router-dom";
import Private from "../Secure Route/Private";
import Login from "../../screens/Login";
import Welcome from "../../screens/Welcome"

export default function ScreenContainer(props) {
    return (
        <Routes>
            <Route path="/signin"  element={<Login />} />
            <Route path="/" element={<Private><Welcome/></Private>} />
        </Routes>
    )
}