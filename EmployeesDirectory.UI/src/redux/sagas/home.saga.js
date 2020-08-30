import { all, call, fork, put, takeEvery, select } from 'redux-saga/effects';
import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_FAILED,
    FETCH_EMPLOYEES_SUCCESS,  
} from '../actions/actions-types';
import { getEmployeesList } from '../../datasource/home.datasource'

const getDataState = (state) => state.home;

function* fetchEmployees(action) {
    try {
        let dataState = yield select(getDataState);
        if (!dataState.loaded) {
            const response = yield call(getEmployeesList); 
            yield put({ type: FETCH_EMPLOYEES_SUCCESS, payload: { list: response.data } });
        }
    } catch (error) {
        yield put({ type: FETCH_EMPLOYEES_FAILED, payload: { data:error } });
    }
}

function* fetchEmployeesSaga() {
    yield takeEvery(FETCH_EMPLOYEES, fetchEmployees);
}

export default function* rootSaga() {
    yield all([
        fetchEmployeesSaga(),
    ]);
}