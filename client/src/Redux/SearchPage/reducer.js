import { INC_PAGE, DSC_PAGE } from "./actionType";

const init = {
    page : 1
}

export const SearchpageReducer = (state = init, {type , payload}) => {
    switch(type) {
        case INC_PAGE :
            return {
                ...state,
                page : state.page + payload
            }
        case DSC_PAGE :
            if(state.page == 1) {
                return {
                    ...state,
                    page : state.page
                }
            }
            return {
                ...state,
                page : state.page - payload
            }
        default :
        return state
    }
}






