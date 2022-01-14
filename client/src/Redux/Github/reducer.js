import { GET_USERS_LOADING, GET_USERS_SUCCESS, GET_USERS_ERROR } from "./actionTypes";


const init = {

    data : [],
    isloading : false,
    isError : false
}
export const searchReducer = (state = init, {type , payload}) => {
        switch(type) {
            case GET_USERS_LOADING :
                return {
                    isloading : true,
                    data : [],
                    isError : false
                }
            case GET_USERS_SUCCESS :
                return {
                    isloading : false,
                    data : payload,
                    isError : false
                }
            case GET_USERS_ERROR : 
                return {
                    isLoading : false,
                    data : [],
                    isError : true
                }
            default :
            return state
        }
}
