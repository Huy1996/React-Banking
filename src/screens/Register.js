import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import '../css/registration.css';
import {register} from "../actions/UserAction";
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";
import {USER_REGISTER_FAIL} from "../constants/UserConstant";
import {useNavigate} from "react-router-dom";

export default function Register(props){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, set_username] = useState("");
    const [password, set_password] = useState("");
    const [confirm_password, set_confirm_password] = useState("");
    const [first_name, set_first_name] = useState("");
    const [last_name, set_last_name] = useState("");
    const [email, set_email] = useState("");
    const [address, set_address] = useState("");
    const [city, set_city] = useState("");
    const [state, set_state] = useState("");
    const [zip_code, set_zip_code] = useState("");
    const [phone_number, set_number] = useState("");
    const [pin, set_pin] = useState("");
    const [checked, set_check] = useState(false);

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, message, error } = userRegister;

    const submit_handler = (e) => {
        e.preventDefault();
        if(password != confirm_password){
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: "Password and Confirm Password does not match."
            })
        }
        else if(!checked){
            alert("Terms and condition must be agreed!");
        }
        else {
            const data = {
                username,
                password,
                first_name,
                last_name,
                email,
                address,
                city,
                state,
                zip_code,
                phone_number,
                pin
            };
            dispatch(register(data));
        }
    }

    useEffect(() => {
        if(message){
            navigate('/signin');
        }
    }, [message])

    return(
        <div className="div-container">
            <h2>REGISTER</h2>

            {loading && <LoadingBox />}
            {message && <MessageBox varient="success">{message}</MessageBox>}
            {error && <MessageBox variant="danger">{error}</MessageBox>}

            <div className="signup-box">
                <form className="fill-box" onSubmit={submit_handler}>
                    <label>Username</label>
                    <input type="text" required="required"
                           onChange={e => set_username(e.target.value)}/>

                    <label>Password</label>
                    <input className="password" type="password" required="required"
                           onChange={e => set_password(e.target.value)}/>

                    <label>Confirm Password</label>
                    <input className="confirmPassword" type="password" required="required"
                           onChange={e => set_confirm_password(e.target.value)}/>

                    <label>First Name</label>
                    <input type="text" required="required"
                           onChange={e => set_first_name(e.target.value)}/>

                    <label>Last Name</label>
                    <input type="text" required="required"
                           onChange={e => set_last_name(e.target.value)}/>

                    <label>Email</label>
                    <input type="text" required="required"
                           onChange={e => set_email(e.target.value)}/>

                    <label>Phone Number</label>
                    <input type="text" required="required"
                           onChange={e => set_number(e.target.value)}/>

                    <label>PIN</label>
                    <input type="text" required="required"
                           onChange={e => set_pin(e.target.value)}/>

                    <label>Address</label>
                    <input type="text" required="required"
                           onChange={e => set_address(e.target.value)}/>

                    <label>City</label>
                    <input type="text" required="required"
                           onChange={e => set_city(e.target.value)}/>

                    <label>State</label>
                    <input type="text" required="required"
                           onChange={e => set_state(e.target.value)}/>


                    <label>Zipcode</label>
                    <input type="text" required="required"
                           onChange={e => set_zip_code(e.target.value)}/>

                    <label id="checkbox">
                        <input type="checkbox" name="remember"
                               defaultChecked={checked}
                               onChange={() => set_check(!checked)}/>
                        I agree the Terms and Conditions
                    </label>
                    <button className="button" type="submit">SUBMIT</button>
                </form>
                <p> Already have an account? <a href="/signin">Login here</a></p>
            </div>
        </div>
    )
}