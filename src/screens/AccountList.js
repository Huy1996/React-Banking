import React, {useEffect} from 'react';
import '../css/account.css'
import {useDispatch, useSelector} from "react-redux";
import LoadingBox from "../components/Loading/LoadingBox";
import MessageBox from "../components/Loading/MessageBox";
import {getAccountList} from "../actions/AccountAction";
import {useNavigate} from "react-router-dom";

function AccountList(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const listAccount = useSelector(state => state.accountList);
    const {loading, accountList, error} = listAccount;


    useEffect(() => {
        dispatch(getAccountList())
    },[navigate, dispatch])

    function render_account(){
        if(accountList) {
            return (
                <>
                    <thead>
                    <tr>
                        <th>Account #</th>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Balance</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {accountList && accountList.map((acc, idx) => (
                        <tr>
                            <td>{idx + 1}</td>
                            <td>{acc.id}</td>
                            <td>{acc.type}</td>
                            <td>${acc.balance.toFixed(2)}</td>
                            <td>{acc.status === 1 ? "Active" : "Deactivated"}</td>
                        </tr>
                    ))}
                    </tbody>
                </>)
        }
        else{
            return (
                <>
                    <MessageBox variant="warning">{"No Account Open Yet."}</MessageBox>
                    <p><a href="/openAccount">Open new account here!</a></p>
                </>
            )
        }
    }

    return (
        <div className="div-container">
            {loading && <LoadingBox />}
            {error && <MessageBox variant="danger">{error}</MessageBox>}
            <table className="fl-table">
                {render_account()}
            </table>
        </div>
    );
}

export default AccountList;