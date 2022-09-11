import * as ActionTypes from './ActionTypes'

import { db } from '../firebase/firebase'
import { getDocs, collection } from 'firebase/firestore'

export const menLoading = () =>({
    type:ActionTypes.MEN_LOADING
})
export const menFailed = (errmess) =>({
    type:ActionTypes.MEN_FAILED,
    payload: errmess
})
export const addMen = (men) =>({
    type:ActionTypes.ADD_MEN,
    payload: men
})


export const fetchMen = () => async (dispatch) => {
    dispatch(menLoading(true))
    try{
        const querySnapshot = await getDocs(collection(db, 'men'))
        let men = []
        querySnapshot.forEach(doc =>{
            const data = doc.data()
            const _id = doc.id
            men.push({_id, ...data})
            
        })
        return dispatch(addMen(men))
    }
    catch (error){
        return dispatch(menFailed(error.message))
    }
}

//women
export const womenLoading = () =>({
    type:ActionTypes.WOMEN_LOADING
})
export const womenFailed = (errmess) =>({
    type:ActionTypes.WOMEN_FAILED,
    payload: errmess
})
export const addWomen = (women) =>({
    type:ActionTypes.ADD_WOMEN,
    payload: women
})


export const fetchWomen = () => async (dispatch) => {
    dispatch(womenLoading(true))
    try{
        const querySnapshot = await getDocs(collection(db, 'women'))
        let women = []
        querySnapshot.forEach(doc =>{
            const data = doc.data()
            const _id = doc.id
            women.push({_id, ...data})
            
        })
        return dispatch(addWomen(women))
    }
    catch (error){
        return dispatch(womenFailed(error.message))
    }
}