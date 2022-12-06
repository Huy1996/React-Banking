import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAccountList} from "../actions/AccountAction";
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";
import {getTransactionList} from "../actions/TransactionAction";
import {Link, useNavigate} from "react-router-dom";

function Transaction(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [account_id, set_id] = useState("");

    const listAccount = useSelector(state => state.accountList);
    const {loading, accountList, error} = listAccount;


    const listTransaction = useSelector(state => state.transactionList);
    const {loading: transactionLoading, transactionList, error: transactionError} = listTransaction;

    useEffect(() => {
        dispatch(getAccountList())
    },[dispatch, navigate])

    useEffect(() => {
        if(account_id !== ""){
            dispatch(getTransactionList(account_id));
        }
    },[account_id])

    function render_table(){
        if(transactionLoading) return (<LoadingBox />);
        else if(transactionError) return (<MessageBox variant="danger">{transactionError}</MessageBox>);
        else{
            if (!transactionList || transactionList.length === 0) return (<MessageBox variant="warning">{"No transaction history."}</MessageBox>);
            else return(
                <table className="fl-table">
                    <thead>
                    <tr>
                        <th>Transaction ID</th>
                        <th>Transaction Type</th>
                        <th>Transaction Date</th>
                        <th>Transaction Amount</th>
                        <th>To Account</th>
                        <th>Transaction Image</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        transactionList && transactionList.map(transaction => (
                            <tr>
                                <td>{transaction.id}</td>
                                <td>{transaction.transaction_type}</td>
                                <td>{transaction.time}</td>
                                <td>{transaction.transaction_amount}</td>
                                <td>{transaction.receiver ? `Account ending in ${transaction.receiver.slice(-6)}` : "None"}</td>
                                <td>{transaction.checking_image ? <a href={transaction.checking_image}>Download</a> : "None"}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>

            )
        }
    }

    return (
        <div className="div-container">
            <h3>MY TRANSACTIONS</h3>
            <div className='container'>
                {loading ? <LoadingBox /> :
                    error && <MessageBox variant="danger">{error}</MessageBox>}
                <label>Account</label>
                <select name="account-id" id="account-id" onChange={e => set_id(e.target.value)}>
                    <option value="" selected={true}></option>
                    {accountList && accountList.map((acc) =>
                        <option value={acc.id}>{acc.type} ending in {acc.id.slice(-4)}</option>
                    )}
                </select>
            </div>
            {render_table()}
            <p>________________________________</p>
        </div>
    );
}

export default Transaction;