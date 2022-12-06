import React, {useEffect, useState} from 'react';
import "../css/transfer.css"
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAccountList} from "../actions/AccountAction";
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";
import {transferAction} from "../actions/TransactionAction";

function Transfer(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [account_id, set_id] = useState("");
    const [receiver, set_receiver] = useState("");
    const [amount, set_amount] = useState(0);

    const listAccount = useSelector(state => state.accountList);
    const {loading, accountList, error} = listAccount;

    const transfer = useSelector(state => state.transfer);
    const {loading: transferLoading, success, transaction, error: transferError} = transfer;


    useEffect(() => {
        dispatch(getAccountList())
    },[dispatch, navigate])

    useEffect(() => {
        if(success){
            let text = `Confirmation (${transaction.id})\n${transaction.transaction_type} successful at ${transaction.time}`;
            if(window.confirm(text))
                navigate('/transaction');
        }
    },[dispatch, navigate, success])


    function submitHandler(e){
        e.preventDefault();
        if(account_id === "") window.alert("Please select account you want to transfer from.")
        else if(receiver === "") window.alert("Please select account you want to transfer to.")
        else if(account_id === receiver) window.alert("Please select different account.")
        else {
            const data = {
                receiver,
                amount
            }
            dispatch(transferAction(account_id, data))
        }
    }

    return (
        <div className="div-container" style={{"background-color": "#4D5566"}}>
            {transferLoading && <LoadingBox />}
            {transferError && <MessageBox variant="danger">{transferError}</MessageBox>}
            <div className="flex">
                <div className="row">
                    <div className="left"><span className="category">TRANSFER FROM</span></div>
                    <div style={{"min-width": "14px"}}></div>
                    {loading ? <LoadingBox /> :
                        error && <MessageBox variant="danger">{error}</MessageBox>}
                    <select name="account-id" id="account-id" onChange={e => set_id(e.target.value)}>
                        <option value="" selected={true}></option>
                        {accountList && accountList.map((acc) =>
                            <option value={acc.id}>{acc.type} ending in {acc.id.slice(-4)}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="flex">
                <div className="row">
                    <div className="left"><span className="category">TRANSFER TO</span></div>
                    <div style={{"min-width": "14px"}}></div>
                    {loading ? <LoadingBox /> :
                        error && <MessageBox variant="danger">{error}</MessageBox>}
                    <select name="account-id" id="account-id" onChange={e => set_receiver(e.target.value)}>
                        <option value="" selected={true}></option>
                        {accountList && accountList.map((acc) =>
                            <option value={acc.id}>{acc.type} ending in {acc.id.slice(-4)}</option>
                        )}
                    </select>
                </div>
            </div>

            <div className="flex">
                <div className="row">
                    <div className="left"><span className="category">Amount</span></div>
                    <div style={{"min-width": "14px"}}></div>
                    <input
                        className="right"
                        type="number"
                        id="amount"
                        value={amount}
                        onChange={e => set_amount(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex">
                <div className="row">
                    <button className="category"><a className="cancel" href="/">CANCEL</a></button>
                    <div style={{"min-width": "14px"}}></div>
                    <button className="category" id="transfer" type="submit" onClick={submitHandler}>
                        CONFIRM
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Transfer;