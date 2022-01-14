import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS } from "./actionTypes";

export const getUserSuccess = (payload) => {
        return {
            type : GET_USERS_SUCCESS,
            payload : payload
        }
}

export const getUserLoading = () => {
    return {
        type : GET_USERS_LOADING
    }
}

export const getUserError = () => {
    return {
        type : GET_USERS_ERROR,
    }
}