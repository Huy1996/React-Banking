import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk'
import {userRegisterReducer, userSigninReducer} from "./reducers/UserReducer";

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem("USER_INFO") ? JSON.parse(localStorage.getItem("USER_INFO")) : null
    }
}

const reducer = combineReducers({
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
})


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)));
export default store;