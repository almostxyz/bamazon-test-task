import { combineReducers } from 'redux'
import booksReducer from './books'
import pagesReducer from './pages'

const rootReducer = combineReducers({
    booksReducer,
    pagesReducer
})

export default rootReducer