import homeReducer from './home.reducer' 
import {  intlReducer } from 'react-intl-redux'
import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux';


 export default (history) => combineReducers({
    home:homeReducer,
    intl:intlReducer, 
    router: connectRouter(history)
  })

