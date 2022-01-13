import {GET_GITS} from './actionType'


export const getgitsData = (payload) => {
    return {
        type : GET_GITS,
        payload,
    }
}

export const getGits = () => (dispatch) => {

    fetch(`https://api.github.com/gists/public?page=${page}&per_page=5`)
    .then((res) => res.json())
    .then((res) => {
        getgitsData(res)
    })
    .catch(err => {
        console.log(err)
    })
}
