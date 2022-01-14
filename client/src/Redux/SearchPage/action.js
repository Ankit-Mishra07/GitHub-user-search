import { INC_PAGE, DSC_PAGE } from "./actionType";

export const SearchincPage = (payload) => {
    return {
        type : INC_PAGE,
        payload
    }
}

export const SearchdscPage = (payload) => {
    return {
        type : DSC_PAGE,
        payload
    }
}