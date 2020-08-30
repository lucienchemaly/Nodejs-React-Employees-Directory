import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';
import {
    FETCH_DATA,
    FETCH_DATA_FAILED,
    FETCH_DATA_SUCCESS,
    
} from '../actions/actions-types';
import { getEmployeesList } from '../../datasource/home.datasource'

const getDataState = (state) => state.home;

function* fetchEmployees() {
    try {
        let dataState = yield select(getDataState);
        if (!dataState.data.loaded) {
            const response = yield call(getEmployeesList); 
            yield put({ type: FETCH_DATA_SUCCESS, payload: { data: response } });
        }

    } catch (error) {
        yield put({ type: FETCH_DATA_FAILED, payload: { data:error } });
    }
}

function* fetchEmployeesSaga() {
    yield takeEvery(FETCH_DATA, fetchEmployees);
}


export default function* rootSaga() {
    yield all([fork(fetchEmployeesSaga)]);
}