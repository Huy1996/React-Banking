import axios from "axios"
import {URL} from "./constants/AJAXConstant.js"

export const fetching = async (dispatch, method, url, requestConstant, successConstant, failConstant,
                               option={
                                   sendData:{},
                                   header:{},
                                   secondDispatch:false,
                                   secondConstant:'',
                                   store:false,
                                   storeName:''
                               }) => {
    dispatch({
        type: requestConstant,
        payload: option.sendData,
    });
    try{
        //const { data } = await Axios.get(url);
        const {data} = await axios({
            method: method,
            url: URL + url,
            data: option.sendData,
            headers: option.header,
        })

        dispatch({
            type:       successConstant,
            payload:    data
        })
        // Handle second dispatch if applicable
        if(option.secondDispatch){
            dispatch({
                type:       option.secondConstant,
                payload:    data
            })
        }
        // Handle store request to local storage
        if(option.store){
            localStorage.setItem(option.storeName, JSON.stringify(data));
        }
    }
    catch(error){
        const message = error.response && error.response.data.message
            ? error.response.data.message
            : error.message;
        dispatch({
            type:       failConstant,
            payload:    message
        })
    }
}