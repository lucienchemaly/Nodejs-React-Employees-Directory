import { all, call, put, takeEvery, select } from 'redux-saga/effects';
import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_FAILED,
    FETCH_EMPLOYEES_SUCCESS, 
    UPDATE_EMPLOYEE,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAILED,
    ADD_EMPLOYEE,
    ADD_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_FAILED,
    DELETE_EMPLOYEE,
    DELETE_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILED, 
} from '../actions/actions-types';
import { 
    getEmployeesList,
    createEmployee,
    editEmployee,
    removeEmployee } from '../../datasource/home.datasource';

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

function* updateEmployee(action) {
    try {
        yield call(editEmployee, action.payload); 
        yield put({ type: UPDATE_EMPLOYEE_SUCCESS });
    } catch (error) {
        yield put({ type: UPDATE_EMPLOYEE_FAILED, payload: { error:error } });
    }
}

function* updateEmployeeSaga() {
    yield takeEvery(UPDATE_EMPLOYEE, updateEmployee);
}

function* addEmployee(action) {
    try {
        console.log(action.payload, "add employee action");
        yield call(createEmployee, action.payload); 
        yield put({ type: ADD_EMPLOYEE_SUCCESS });
        const response = yield call(getEmployeesList); 
        yield put({ type: FETCH_EMPLOYEES_SUCCESS, payload: { list: response.data } });
    } catch (error) {
        yield put({ type: ADD_EMPLOYEE_FAILED, payload: { error:error } });
    }
}

function* addEmployeeSaga() {
    yield takeEvery(ADD_EMPLOYEE, addEmployee);
}

function* deleteEmployee(action) {
    try {
        console.log(action, "delete employee action");
        yield call(removeEmployee, action.payload); 
        yield put({ type: DELETE_EMPLOYEE_SUCCESS });
        const response = yield call(getEmployeesList); 
        yield put({ type: FETCH_EMPLOYEES_SUCCESS, payload: { list: response.data } });
    } catch (error) {
        yield put({ type: DELETE_EMPLOYEE_FAILED, payload: { error:error } });
    }
}

function* deleteEmployeeSaga() {
    yield takeEvery(DELETE_EMPLOYEE, deleteEmployee);
}

export default function* rootSaga() {
    yield all([
        fetchEmployeesSaga(),
        updateEmployeeSaga(),
        addEmployeeSaga(),
        deleteEmployeeSaga()
    ]);
}

