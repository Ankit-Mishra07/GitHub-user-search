import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_INVALID } from "./actionType";

export const loginRequest = () => {
    return {
        type : LOGIN_REQUEST
    }
}

export const loginSuccess = (token) => {
    return {
        type : LOGIN_SUCCESS,
        payload : token
    }

}

export const loginFailure = (err) => {
    return {
        type : LOGIN_FAILURE,
        payload : err
    }
}
export const loginInvalid = (message) => {
    return {
        type : LOGIN_INVALID,
        payload : message
    }
}