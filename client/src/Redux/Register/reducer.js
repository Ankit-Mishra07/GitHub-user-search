import { REG_FAILURE,REG_REQUEST, REG_SUCCESS } from "./actionTypes";


const init = {
    isLoading : false,
    message : "",
    isError : false
}

export const regreducer = (state = init, {type , payload}) => {
        switch(type) {
            case REG_REQUEST :
                return {
                    isLoading : true,
                    message : "",
                    isError : false
                }
            case REG_SUCCESS : 
            return {
                isLoading : false,
                message : payload,
                isError : false
            }
            case REG_FAILURE : 
                return {
                    isLoading : false,
                    message : payload,
                    isError : true
                }
            default :
            return state
        }
}