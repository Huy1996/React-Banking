import React, {useEffect, useState} from 'react';
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateUserPassword} from "../actions/UserAction";
import {USER_UPDATE_PASSWORD_RESET} from "../constants/UserConstant";
import '../css/registration.css';

function ChangePassword(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, set_username] = useState('');
    const [password, set_password] = useState('');
    const [new_password, set_new_password] = useState('')
    const [confirm_password, set_confirm_password] = useState('')

    const userUpdatePassword = useSelector(state => state.userUpdatePassword);
    const {loading, success, error} = userUpdatePassword;

    const submitHandler = (e) => {
        e.preventDefault();
        if (new_password !== confirm_password) alert("Password not match.")
        else if (password === new_password) alert("Please pick a new password")
        else {
            const data = {
                username,
                password,
                new_password
            }
            dispatch(updateUserPassword(data));
        }
    }

    useEffect(() => {
        if(success){
            dispatch({
                type: USER_UPDATE_PASSWORD_RESET
            });
            navigate('/');
        }
    }, [navigate, dispatch, success])

    return (
        <div className="div-container">
            <div className="signup-box">
                <h1>Update your password below: </h1>
                {loading && <LoadingBox />}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <form className="fill-box" onSubmit={submitHandler}>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => set_username(e.target.value)}
                        required={true}
                    />
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => set_password(e.target.value)}
                        required={true}
                    />
                    <label>New Password</label>
                    <input
                        type="password"
                        value={new_password}
                        onChange={e => set_new_password(e.target.value)}
                        required={true}
                    />
                    <label>Confirm Password</label>
                    <input
                        type="password"
                        value={confirm_password}
                        onChange={e => set_confirm_password(e.target.value)}
                        required={true}
                    />
                    <div>
                        <button id="update-profile" type="submit">UPDATE</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;