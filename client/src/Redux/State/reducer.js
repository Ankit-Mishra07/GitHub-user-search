import { GET_STATE, HIDE_STATE } from "./actionType";


const init = {
    condition : true
}


export const reducer = (state = init, {type}) => {
    switch(type) {
        case GET_STATE : 
        return {
            condition : true
        }
        case HIDE_STATE : 
        return {
            condition : false
        }
        default : 
        return state
    }
}
