import * as types from '../constants/ActionTypes';

const defaultState ={
    isSearch : true
}

export default function setIsSearch(state={defaultState},action){
    switch(action.type){
        case types.SET_IS_SEARCH:   
        return {
            isSearch: action.data
        }
        default:
            return state;
    }
}
