import {     
    FETCH_EMPLOYEES,
    UPDATE_EMPLOYEE,
    ADD_EMPLOYEE,
    DELETE_EMPLOYEE, } from "./actions-types";

export function fetchEmployees() {
    return { type: FETCH_EMPLOYEES };
}

export function addEmployee(employee) {
    return { type: ADD_EMPLOYEE, payload: employee };
}

export function updateEmployee(employee) {
    return { type: UPDATE_EMPLOYEE, payload: employee };
}

export function deleteEmployee(id) {
    return { type: DELETE_EMPLOYEE, payload: id };
}