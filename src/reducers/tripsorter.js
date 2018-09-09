import * as types from '../constants/ActionTypes';

const defaultState ={
    uniqueCities:[],
    cheapestCities:{}
}

export default function tripSorter(state={defaultState},action){
    console.log(JSON.stringify(action.uniqueCities));
    switch(action.type){
        case types.RECEIVE_TRIP_SORTER_DATA:   
        return {
            uniqueCities: action.uniqueCities,
            cheapestCities: action.cheapestCities
        }
        default:
            return state;
    }
}
