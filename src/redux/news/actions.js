import axios from 'axios'

// import { API_KEY } from '../../API_KEY'
import { types } from './types'

const API_KEY = '3ce1ce7f8e1a4cb4abb2ca267d172c08'

export const newsActions = Object.freeze({
  // Sync
  startFetching: () => {
    return {
      type: types.NEWS_START_FETCHING
    }
  },
  stopFetching: () => {
    return {
      type: types.NEWS_STOP_FETCHING
    }
  },
  fill: (payload) => {
    return {
      type: types.NEWS_FILL,
      payload
    }
  },
  setFetchingError: (error) => {
    return {
      type: types.NEWS_SET_FETCHING_ERROR,
      error: true,
      payload: error
    }
  },
  // Async
  fetchAsync: () => async(dispatch)=> {
    dispatch(newsActions.startFetching());

    await axios.get(`https://newsapi.org/v2/top-headlines?country=ua&apiKey=${API_KEY}`)
    .then(response => {
      dispatch(newsActions.fill(response.data));
    })
    .catch(error => {
      dispatch(newsActions.setFetchingError(error.response));
    })

    dispatch(newsActions.stopFetching());
  }
})