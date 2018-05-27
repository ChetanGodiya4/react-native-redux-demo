import createReducer from '@lib/createReducer'
import * as types from './types'

data:[]
const initial={
    data:[]
}

export const provideToStore=createReducer(initial,{
    [types.ADD_ITEM](state,action){
        return {
            ...state,
            data:Object.assign({},action.data)
        }
    },
    [types.DEL_ITEM](state,action){
        return {
            ...state,
            data:Object.assign({},action.data)
        }
    },

})