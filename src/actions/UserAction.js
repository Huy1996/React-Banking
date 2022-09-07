import * as uc from '../constants/UserConstant'
import {fetching} from "../helper";
import * as method from "../constants/AJAXConstant"


export const signin = (username, password) => async (dispatch) => {
    const url = '/users/login';
    await fetching(
        dispatch,
        method.POST,
        url,
        uc.USER_SIGNIN_REQUEST,
        uc.USER_SIGNIN_SUCCESS,
        uc.USER_SIGNIN_FAIL,
        {
            sendData:   {username, password},
            store:      true,
            storeName:  "USER_INFO"
        }
    )
}

export const register = (data) => async (dispatch) => {
    const url = '/users/register';
    await fetching(
        dispatch,
        method.POST,
        url,
        uc.USER_REGISTER_REQUEST,
        uc.USER_REGISTER_SUCCESS,
        uc.USER_REGISTER_FAIL,
        {
            sendData: {...data}
        }
    )
}