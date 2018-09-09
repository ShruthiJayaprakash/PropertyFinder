import * as types from '../constants/ActionTypes';
import { fetchTripSorterData } from './TripSorterActions'
export function setIsSearch(val) {
	return {
		type: types.SET_IS_SEARCH,
		data: val
	}
};

export function fetchTripSorterDataIfNeeded() {
	return (dispatch, getState) => {
		return dispatch(fetchTripSorterData())
	}
  }

