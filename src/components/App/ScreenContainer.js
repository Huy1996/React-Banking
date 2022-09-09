import React from 'react'
import {Route, Routes} from "react-router-dom";
import Private from "../Secure Route/Private";
import Login from "../../screens/Login";
import Welcome from "../../screens/Welcome"
import Register from "../../screens/Register";
import EditProfile from "../../screens/EditProfile";
import ChangePassword from "../../screens/ChangePassword";
import OpenAccount from "../../screens/OpenAccount";

export default function ScreenContainer(props) {
    return (
        <Routes>
            <Route path="/"                     element={<Private><Welcome /></Private>}        />
            <Route path="/signin"               element={<Login />}                             />
            <Route path="/register"             element={<Register />}                          />
            <Route path="/editProfile"          element={<Private><EditProfile /></Private>}    />
            <Route path="/changePassword"       element={<Private><ChangePassword /></Private>} />
            <Route path="/openAccount"          element={<Private><OpenAccount /></Private>}    />
        </Routes>
    )
}