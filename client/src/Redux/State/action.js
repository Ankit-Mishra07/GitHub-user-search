import { GET_STATE, HIDE_STATE } from "./actionType";

export const getState = () => {
    return {
        type : GET_STATE,
    }
}

export const hideState = () => {
    return {
        type : HIDE_STATE,
    }
}