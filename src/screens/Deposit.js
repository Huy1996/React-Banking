import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deposit, getAccountList} from "../actions/AccountAction";
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";
import {useNavigate} from "react-router-dom";
import Axios from "axios";
import {URL} from "../constants/AJAXConstant.js"
import '../css/deposit.css'

function Deposit(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [account_id, setId] = useState('');
    const [image, setImage] = useState('');
    const [amount, setAmount] = useState(0);

    const [loadingUpload, setLoadingUpload] = useState(false);
    const [errorUpload, setErrorUpload]     = useState('');

    const listAccount = useSelector(state => state.accountList);
    const {loading, accountList, error} = listAccount;

    const userSignin = useSelector(state => state.userSignin);
    const {userLogin} = userSignin;

    const accountDeposit = useSelector(state => state.accountDeposit);
    const {loading: loadingDeposit, success, transaction, error: errorDeposit} = accountDeposit;


    useEffect(() => {
        dispatch(getAccountList())
    },[navigate, dispatch])

    useEffect(() => {
        if(success){
            let text = `Confirmation (${transaction.id})\n${transaction.transaction_type} successful at ${transaction.time}`;
            if(window.confirm(text))
                navigate('/transactions');
        }
    },[dispatch, navigate, success])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0];
        const bodyFormDate = new FormData();
        bodyFormDate.append('file', file);
        setLoadingUpload(true);
        try{
            const {data} = await Axios.post(URL + '/upload/', bodyFormDate, {
                headers: {
                    'Content-Type': 'muttipart/form-data',
                    Authorization: `Bearer ${userLogin.access_token}`,
                }
            });
            setImage(data.image);
            setLoadingUpload(false);
        }
        catch(error){
            setErrorUpload(error.message);
            setLoadingUpload(false);
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(account_id === '')
            window.alert("Please choose an account you want to deposit.")
        else if (amount <= 0)
            window.alert('Amount must be larger than 0.')
        else if (image === '')
            window.alert('Please attach you check picture.')
        else {
            const data = {
                account_id,
                amount,
                image
            }
            dispatch(deposit(data));
        }
    }

    return (
        <div className="div-container">
            {loading ? <LoadingBox /> :
                error && <MessageBox variant="danger">{error}</MessageBox>}
            <form onSubmit={submitHandler}>
                <div className='container'>
                    <select name="action" id="action">
                        <option value="Deposit">Deposit</option>
                    </select>
                    <select name="account-id" id="account-id" onChange={e=>setId(e.target.value)}>
                        <option value="" selected={true}></option>
                        {accountList.map((acc) =>
                            <option value={acc.id}>{acc.type} ending in {acc.id.slice(-4)}</option>
                        )}
                    </select>
                </div>
                <div className='container'>
                    <span>Deposit amount ($):</span>
                    <input
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={e=>setAmount(e.target.value)}
                        required={true}
                    />
                </div>

                <div className='container'>
                    <form>
                        <label htmlFor="img" id="upload-check">Upload check:</label>
                        <input
                            type='file'
                            id='imageFile'
                            label="Choose Image"
                            onChange={uploadFileHandler}
                        />
                        {loadingUpload && (<LoadingBox />)}
                        {errorUpload && (<MessageBox variant="danger">{errorUpload}</MessageBox>)}
                    </form>
                </div>
                <button
                    id="execute"
                    type="submit"
                >
                    DEPOSIT
                </button>
                {loadingDeposit && (<LoadingBox />)}
                {errorDeposit && (<MessageBox variant="danger">{errorDeposit}</MessageBox>)}
            </form>
        </div>

    );
}

export default Deposit;