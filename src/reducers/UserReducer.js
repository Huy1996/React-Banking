import * as uc from '../constants/UserConstant'

export const userSigninReducer = (state = {}, action) => {
    switch(action.type){
        case uc.USER_SIGNIN_REQUEST:
            return {
                loading: true,
            };
        case uc.USER_SIGNIN_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload,
            };
        case uc.USER_SIGNIN_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case uc.USER_SIGNOUT:
            return {};
        default:
            return state;
    }
}