import { types } from './types'

const initialState = {
  data: null,
  isFetching: false,
  error: null,
}

export const newsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.NEWS_START_FETCHING:
      return {
        ...state,
        isFetching: true,
      };

    case types.NEWS_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
      };

    case types.NEWS_SET_FETCHING_ERROR:
      return {
        ...state,
        error: payload,
        data: null,
      };

    case types.NEWS_FILL: 
      return {
        ...state,
        data: payload,
        error: null,
      };
  
    default:
      return state;
  }
}
