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
