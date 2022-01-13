import { REG_REQUEST, REG_SUCCESS, REG_FAILURE } from "./actionTypes";


export const regRequest = () => {
    return {
        type : REG_REQUEST
    }
}
export const regSuccess = (message) => {
    return {
        type : REG_SUCCESS,
        payload : message
    }
}

export const regFailure = (err) => {
    return {
        type : REG_FAILURE,
        payload : err
    }
}
