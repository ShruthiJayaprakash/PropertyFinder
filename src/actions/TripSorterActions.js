// import fetch from 'isomorphic-fetch'
import * as types from '../constants/ActionTypes'
import { IS_MOCK_DATA } from '../helpers/Config'
import tripSorterData from '../tempData/tripSorter'
import { getUniqueCities, getCheapestCities } from '../helpers/Utility'

export function requestTripSorterData() {
    return {
        type: types.REQUEST_TRIP_SORTER_DATA
    }
}

export function recieveTripSorterData(json) {
    // console.log("json :"+JSON.stringify(json))
    
    return {
        type: types.RECEIVE_TRIP_SORTER_DATA,
        uniqueCities: getUniqueCities(json.deals),
        cheapestCities: getCheapestCities(json.deals)
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
        // return dispatch => {
        //    dispatch(requestAdminExchangeRate())
        //     return fetch(GET_ADMIN_EXCHANGE_RATE_URL, { 
        //     method:'get', 
        //     headers : {
        //       "ClientType": "RangeUI",
        //       "Authorization": "Bearer " + localStorage.token} 
        //     })
        //     .then(checkHttpStatus)
        //     .then(response => response.json())
        //     .then(json => {
        //     try {
        //        return dispatch(recieveAdminExchangeRate(json))
        //     } catch (e) {
        //       dispatch(loginUserFailure({
        //         response: {
        //             status: 403,
        //             statusText: 'Session expired!!! please login again'
        //         }
        //       }));   
        //     }
        //   }).catch(error => {
        //     if(error.response.status === 401){
        //       dispatch(loginUserFailure(error));
        //      }     
        //   })
        // }
    }
}