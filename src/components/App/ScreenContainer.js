import React from 'react'
import {Route, Routes} from "react-router-dom";
import Private from "../Secure Route/Private";
import Login from "../../screens/Login";
import Welcome from "../../screens/Welcome"
import Register from "../../screens/Register";
import EditProfile from "../../screens/EditProfile";
import ChangePassword from "../../screens/ChangePassword";
import OpenAccount from "../../screens/OpenAccount";
import AccountList from "../../screens/AccountList";
import Deposit from "../../screens/Deposit";
import Transaction from "../../screens/Transaction";
import Transfer from "../../screens/Transfer";

export default function ScreenContainer(props) {
    return (
        <Routes>
            <Route path="/"                     element={<Private><Welcome /></Private>}        />
            <Route path="/signin"               element={<Login />}                             />
            <Route path="/register"             element={<Register />}                          />
            <Route path="/editProfile"          element={<Private><EditProfile /></Private>}    />
            <Route path="/changePassword"       element={<Private><ChangePassword /></Private>} />
            <Route path="/openAccount"          element={<Private><OpenAccount /></Private>}    />
            <Route path="/account"              element={<Private><AccountList /></Private>}    />
            <Route path="/mobileDeposit"        element={<Private><Deposit /></Private>}        />
            <Route path="/transaction"          element={<Private><Transaction /></Private>}    />
            <Route path="/transferFunds"        element={<Private><Transfer /></Private>}       />
        </Routes>
    )
}