import * as ac from '../constants/AccountConstant.js';
import {fetching} from "../helper";
import * as method from "../constants/AJAXConstant";

export const createAccount = (data) => async (dispatch, getState) => {
    const {userSignin: {userLogin}} = getState();
    const url = '/accounts/'
    await fetching(
        dispatch,
        method.POST,
        url,
        ac.ACCOUNT_CREATE_REQUEST,
        ac.ACCOUNT_CREATE_SUCCESS,
        ac.ACCOUNT_CREATE_FAIL,
        {
            sendData: {...data},
            header: {Authorization: `Bearer ${userLogin.access_token}`}
        }
    )
}