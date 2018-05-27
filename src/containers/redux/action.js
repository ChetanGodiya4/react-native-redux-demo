import * as types from './types'

const newData=[]
const data=[]
const i=0
/**
 * 
 * Add Item
 */
export function addToData(data){
    return{
        type:types.ADD_ITEM,
        data
    }
}
export function addItem(item){
    return(dispatch,getState)=>{
        data.push(item)
        dispatch(addToData(data))
    }
}

/**
 * Delete Item
 */
export function setDel(data){
    return{
        type:types.DEL_ITEM,
        data
    }
}
export function deleteItem(item){
    
    return(dispatch,getState)=>{

        data=data.slice(item,1)
        console.log(data)
        dispatch(setDel(data))
    
    }
}
