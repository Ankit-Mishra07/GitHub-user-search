import { INC_PAGE, DSC_PAGE } from "./actionType";

export const incPage = (payload) => {
    return {
        type : INC_PAGE,
        payload
    }
}

export const dscPage = (payload) => {
    return {
        type : DSC_PAGE,
        payload
    }
}