import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createAccount} from "../actions/AccountAction";
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";
import {useNavigate} from "react-router-dom";

function OpenAccount(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [account_type, set_account_type] = useState('CHECKING');

    const accountCreate = useSelector(state => state.accountCreate);
    const {loading, success, error} = accountCreate;

    const submitHandle = (e) => {
        e.preventDefault();
        dispatch(createAccount({account_type}));
    }

    useEffect(() => {
        if(success){
            navigate('/');
        }
    },[dispatch, navigate, success])

    return (
        <div className="div-container">
            <div className="account-info">
                <h3>Please fill in the information below to open a new account:</h3>
                {loading && <LoadingBox />}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <form onSubmit={submitHandle}>
                    <label>
                        <span>Account Type:</span>
                        <select
                            name="account-type"
                            id="account-type"
                            onChange={e => set_account_type(e.target.value)}
                        >
                            <option value="CHECKING">Checking</option>
                            <option value="SAVING">Saving</option>
                        </select>
                    </label>
                    <br />
                    <button
                        id="open-account"
                        type="submit"
                    >
                        CREATE
                    </button>
                </form>
            </div>
        </div>
    );
}

export default OpenAccount;