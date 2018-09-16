// import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'
import { IS_MOCK_DATA } from '../helpers/Config'
import tripSorterData from '../tempData/tripSorter'
import { getUniqueCities, getCheapestCities, getFastestCities } from '../helpers/Utility'

export function requestTripSorterData() {
    return {
        type: types.REQUEST_TRIP_SORTER_DATA
    }
}

export function recieveTripSorterData(json) {
    return {
        type: types.RECEIVE_TRIP_SORTER_DATA,
        uniqueCities: getUniqueCities(json.deals),
        cheapestCities: getCheapestCities(json.deals),
        fastestCities: getFastestCities(json.deals)
    }

}
export function fetchTripSorterData() {
    if (IS_MOCK_DATA) {
        return dispatch => {
            dispatch(requestTripSorterData())
            tripSorterData.getTripSorterData(data => {
                dispatch(recieveTripSorterData(data))
            })
        }
    } else {
        //real api call
    }
}