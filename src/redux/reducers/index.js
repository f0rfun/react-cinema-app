import { combineReducers } from 'redux'
import errorReducer from './errorReducer'
import moviesReducer from './moviesReducer'

const rootReducers = combineReducers({
    errors: errorReducer,
  moviesReducer: moviesReducer
})

export default rootReducers
