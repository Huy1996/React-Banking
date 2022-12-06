import * as uc from '../constants/UserConstant.js'
import {fetching} from "../helper.js";
import * as method from "../constants/AJAXConstant.js"


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
            storeName:  "USER_LOGIN"
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

export const updateUserInfo = (data) => async (dispatch, getState) => {
    const {userSignin: {userLogin}} = getState();
    const url = '/users/'
    await fetching(
        dispatch,
        method.PUT,
        url,
        uc.USER_UPDATE_REQUEST,
        uc.USER_UPDATE_SUCCESS,
        uc.USER_UPDATE_FAIL,
        {
            sendData: {...data},
            header: {Authorization: `Bearer ${userLogin.access_token}`}
        }
    )
}

export const userInfoDetail = () => async(dispatch, getState) => {
    const {userSignin: {userLogin}} = getState();
    const url = '/users/'
    await fetching(
        dispatch,
        method.GET,
        url,
        uc.USER_INFO_REQUEST,
        uc.USER_INFO_SUCCESS,
        uc.USER_INFO_FAIL,
        {
            header: {Authorization: `Bearer ${userLogin.access_token}`}
        }
    )
}

export const updateUserPassword = (data) => async(dispatch, getState) => {
    const {userSignin: {userLogin}} = getState();
    const url = '/users/register'
    await fetching(
        dispatch,
        method.PUT,
        url,
        uc.USER_UPDATE_PASSWORD_REQUEST,
        uc.USER_UPDATE_PASSWORD_SUCCESS,
        uc.USER_UPDATE_PASSWORD_FAIL,
        {
            sendData: {...data},
            header: {Authorization: `Bearer ${userLogin.access_token}`}
        }
    )
}