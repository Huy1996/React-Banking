import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../css/login.css';
import {signin} from "../actions/UserAction";
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";


export default function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(signin(username, password));
    }

    useEffect(() => {
        if(userInfo){
            navigate('/');
        }
    }, [navigate, userInfo])

    return(
        <div className="login-container">
            {loading && <LoadingBox />}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <div className="div-container">
                <form onSubmit={handleSubmit}>
                    <label>
                        <p>Username</p>
                        <input
                            type="text"
                            onChange={e => setUserName(e.target.value)}
                            required={true}
                        />
                    </label>
                    <label>
                        <p>Password</p>
                        <input
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            required={true}
                        />
                    </label>
                    <div>
                        <button id="login_button" type="submit">LOG IN</button>
                    </div>
                </form>
                <p><a href="/registration">Not registered yet? Register here!</a></p>
            </div>
        </div>
    )
}
