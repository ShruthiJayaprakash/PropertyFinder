import * as types from '../constants/ActionTypes';

const defaultState ={
    searchres : {detailedPath:[]}
}

export default function setSearchResults(state={defaultState},action){
    switch(action.type){
        case types.SET_SEARCH_RESULTS:   
        return {
            searchres: action.data
        }
        default:
            return state;
    }
}   
