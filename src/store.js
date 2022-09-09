import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import {
    userInfoReducer,
    userRegisterReducer,
    userSigninReducer, userUpdatePasswordReducer,
    userUpdateProfileReducer
} from "./reducers/UserReducer";
import {accountCreateReducer} from "./reducers/AccountReducer";

const initialState = {
    userSignin: {
        userLogin: localStorage.getItem("USER_LOGIN") ? JSON.parse(localStorage.getItem("USER_LOGIN")) : null
    }
}

const reducer = combineReducers({
    // User Reducer
    userSignin:         userSigninReducer,
    userRegister:       userRegisterReducer,
    userUpdate:         userUpdateProfileReducer,
    userInfo:           userInfoReducer,
    userUpdatePassword: userUpdatePasswordReducer,
    // Account Reducer
    accountCreate:      accountCreateReducer
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));
export default store;