import * as ac from '../constants/AccountConstant'

export const accountCreateReducer = (state = {}, action) => {
    switch(action.type){
        case ac.ACCOUNT_CREATE_REQUEST:
            return {
                loading: true,
            };
        case ac.ACCOUNT_CREATE_SUCCESS:
            return {
                loading: false,
                success: true
            };
        case ac.ACCOUNT_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const accountListReducer = (state={loading: true, accountList: []}, action) => {
    switch(action.type){
        case ac.ACCOUNT_LIST_REQUEST:
            return {
                loading: true,
                accountList: []
            };
        case ac.ACCOUNT_LIST_SUCCESS:
            return {
                loading: false,
                accountList: action.payload
            }
        case ac.ACCOUNT_LIST_FAIL:
            return {
                loading: false,
                accountList: [],
                error: action.payload
            };
        default:
            return state;
    }
}

export const accountDepositReducer = (state={loading: false, success: false}, action) => {
    switch (action.type){
        case ac.ACCOUNT_DEPOSIT_REQUEST:
            return {
                loading: true,
            };
        case ac.ACCOUNT_DEPOSIT_SUCCESS:
            return {
                loading: false,
                success: true,
                transaction: action.payload
            }
        case ac.ACCOUNT_DEPOSIT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}