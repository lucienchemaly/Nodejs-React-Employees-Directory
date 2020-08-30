import {all} from 'redux-saga/effects';
import homeSaga from './home.saga'; 

 
 
export default function* rootSaga(getState) {
    yield all([
        homeSaga()  
    ]);
}
