/**
 * Mocking client-server processing
 */
import _tripSorter from './tripSorter.json'

const TIMEOUT = 100

export default {
  getTripSorterData(cb, timeout) {
    setTimeout(() => cb(_tripSorter), timeout || TIMEOUT)
  },
}