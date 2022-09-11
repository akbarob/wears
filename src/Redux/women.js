import * as ActionTypes from './ActionTypes'

export const Women = (state ={
    isLoading: true,
    errMess:null,
    Women:[]
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_WOMEN:
            return{...state,
                isLoading: false,
                errMess: null,
                Women:action.payload
            }
        case ActionTypes.WOMEN_LOADING:
            return{...state,
                isLoading:true,
                errMess:null,
                Women:[]
            }
        case ActionTypes.WOMEN_FAILED:
                return{...state,
                    isLoading:false,
                    errMess:action.payload,
                    Women:[]
                }
        default:
            return state
    }
}