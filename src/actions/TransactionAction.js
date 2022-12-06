import * as tc from '../constants/TransactionConstant.js';
import {fetching} from "../helper";
import * as method from "../constants/AJAXConstant";

export const getTransactionList = (data) => async (dispatch, getState) => {
    const {userSignin: {userLogin}} = getState();
    const url = `/accounts/${data}/transaction`;
    await fetching(
        dispatch,
        method.GET,
        url,
        tc.TRANSACTION_LIST_REQUEST,
        tc.TRANSACTION_LIST_SUCCESS,
        tc.TRANSACTION_LIST_FAIL,
        {
            header: {Authorization: `Bearer ${userLogin.access_token}`}
        }
    )
}

export const transferAction = (account_id, data) => async (dispatch, getState) => {
    const {userSignin: {userLogin}} = getState();
    const url = `/accounts/${account_id}/transfer`;
    await fetching(
        dispatch,
        method.POST,
        url,
        tc.TRANSFER_REQUEST,
        tc.TRANSFER_SUCCESS,
        tc.TRANSFER_FAIL,
        {
            sendData: {...data},
            header: {Authorization: `Bearer ${userLogin.access_token}`}
        }
    )
}