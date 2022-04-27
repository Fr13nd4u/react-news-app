import { combineReducers } from 'redux'
import { newsReducer as news} from './news/reducer'

export const rootReducer = combineReducers({
  news,
})