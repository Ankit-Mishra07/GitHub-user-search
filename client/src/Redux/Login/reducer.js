import { GetData, saveData } from "../../utils/localstorage";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_INVALID } from "./actionType";

const init = {
    isLoading : false,
    token : GetData("gittoken") || [],
    message : "",
    isError : false
}

export const Logreducer = (state = init, {type, payload}) => {
    switch(type) {
        case LOGIN_REQUEST : 
        return {
            isLoading : true,
            token : "",
            message : "",
            isError : false
        }
        case LOGIN_SUCCESS : 
        saveData("gittoken", [payload])
        return {
            isLoading : false,
            token : [payload],
            message : "",
            isError : false
        }
        case LOGIN_INVALID : 
        return  {
            isLoading : false,
            token : "",
            message : payload,
            isError : false
        }
        case LOGIN_FAILURE : 
        return {
            isLoading : false,
            token : "",
            message :payload,
            isError : true
        }
        default :
        return state
    }
}