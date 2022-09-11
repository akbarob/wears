import * as ActionTypes from './ActionTypes'

export const Men = (state ={
    isLoading: true,
    errMess:null,
    Men:[]
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_MEN:
            return{...state,
                isLoading: false,
                errMess: null,
                Men:action.payload
            }
        case ActionTypes.MEN_LOADING:
            return{...state,
                isLoading:true,
                errMess:null,
                Men:[]
            }
        case ActionTypes.MEN_FAILED:
                return{...state,
                    isLoading:false,
                    errMess:action.payload,
                    Men:[]
                }
        default:
            return state
    }
}