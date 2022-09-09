import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import '../css/registration.css';
import {updateUserInfo, userInfoDetail} from "../actions/UserAction";
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";
import {useNavigate} from "react-router-dom";
import {USER_UPDATE_RESET} from "../constants/UserConstant";

export default function EditProfile(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userUpdate = useSelector(state => state.userUpdate);
    const {loading, success, error} = userUpdate;

    const userInfo = useSelector(state => state.userInfo);
    const {loading: loadingInfo, info, error: errorInfo} = userInfo;

    const [email, set_email] = useState("");
    const [address, set_address] = useState("");
    const [city, set_city] = useState("");
    const [state, set_state] = useState("");
    const [zip_code, set_zip_code] = useState("");
    const [phone_number, set_number] = useState("");

    useEffect(() => {
        if(success){
            navigate('/');
        }
        if(!info || success){
            dispatch({
                type: USER_UPDATE_RESET
            })
            dispatch(userInfoDetail());
        }
        else{
            set_email(info.email);
            set_address(info.address);
            set_city(info.city);
            set_state(info.state);
            set_zip_code(info.zip_code);
            set_number(info.phone_number);
        }
    },[info, dispatch, success, navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            email,
            address,
            city,
            state,
            zip_code,
            phone_number
        }
        dispatch(updateUserInfo(data));
    }

    return(
        <div className="div-container">
            <div className="signup-box">
                <h1>Update your personal information below: </h1>
                {loadingInfo && <LoadingBox />}
                {errorInfo && <MessageBox variant="danger">{errorInfo}</MessageBox>}
                {loading && <LoadingBox />}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <form className="fill-box" onSubmit={submitHandler}>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => set_email(e.target.value)}
                        required={true}
                    />
                    <label>Address</label>
                    <input
                        type="text"
                        value={address}
                        onChange={e => set_address(e.target.value)}
                        required={true}
                    />
                    <label>City</label>
                    <input
                        type="text"
                        value={city}
                        onChange={e => set_city(e.target.value)}
                        required={true}
                    />
                    <label>State</label>
                    <input
                        type="text"
                        value={state}
                        onChange={e => set_state(e.target.value)}
                        required={true}
                    />
                    <label>Zip Code</label>
                    <input
                        type="text"
                        value={zip_code}
                        onChange={e => set_zip_code(e.target.value)}
                        required={true}
                    />
                    <label>Phone Number</label>
                    <input
                        type="text"
                        value={phone_number}
                        onChange={e => set_number(e.target.value)}
                        required={true}
                    />
                    <div>
                        <button id="update-profile" type="submit">UPDATE</button>
                    </div>
                </form>
            </div>
        </div>
    )
}