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
                userLogin: action.payload,
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

export const userRegisterReducer = (state = {}, action) => {
    switch(action.type){
        case uc.USER_REGISTER_REQUEST:
            return {
                loading: true,
            };
        case uc.USER_REGISTER_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,
            };
        case uc.USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch(action.type){
        case uc.USER_UPDATE_REQUEST:
            return {
                loading: true,
            };
        case uc.USER_UPDATE_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,
                success: true
            };
        case uc.USER_UPDATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case uc.USER_UPDATE_RESET:
            return {};
        default:
            return state;
    }
}

export const userInfoReducer = (state = {}, action) => {
    switch(action.type){
        case uc.USER_INFO_REQUEST:
            return {
                loading: true,
            };
        case uc.USER_INFO_SUCCESS:
            return {
                loading: false,
                info: action.payload,
            };
        case uc.USER_INFO_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}

export const userUpdatePasswordReducer = (state = {}, action) => {
    switch(action.type){
        case uc.USER_UPDATE_PASSWORD_REQUEST:
            return {
                loading: true,
            };
        case uc.USER_UPDATE_PASSWORD_SUCCESS:
            return {
                loading: false,
                message: action.payload.message,
                success: true
            };
        case uc.USER_UPDATE_PASSWORD_FAIL:
            return {
                loading: false,
                error: action.payload,
            };
        case uc.USER_UPDATE_PASSWORD_RESET:
            return {};
        default:
            return state;
    }
}
