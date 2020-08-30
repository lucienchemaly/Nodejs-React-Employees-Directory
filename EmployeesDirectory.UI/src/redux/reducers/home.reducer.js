import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILED,
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

const initialState = { 
    loaded: false,
    loading: false,
    list: []
}

export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EMPLOYEES: {
            return { ...state, loaded: false, loading: true, list: [] }

        }
        case FETCH_EMPLOYEES_SUCCESS: {
            return { ...state, loaded: true, loading: false, list: action.payload.list  }

        }

        case FETCH_EMPLOYEES_FAILED: {
            return { ...state, loaded: false, loading: false , list:[], error: action.payload.response }
        }

        case UPDATE_EMPLOYEE: {
            return { ...state, loaded: true, loading: false}

        }
        case UPDATE_EMPLOYEE_SUCCESS: {
            return { ...state, loaded: true, loading: false }

        }

        case UPDATE_EMPLOYEE_FAILED: {
            return { ...state, employee:{}, loaded: true, loading: false, error: action.payload }
        }

        case ADD_EMPLOYEE: {
            return { ...state, loaded: true, loading: false, employee: {}}

        }
        case ADD_EMPLOYEE_SUCCESS: {
            return { ...state, loaded: true, loading: false, employee: action.payload   }

        }

        case ADD_EMPLOYEE_FAILED: {
            return { ...state, loaded: true, loading: false , employee:{}, error: action.payload.response }
        }

        case DELETE_EMPLOYEE: {
            return { ...state, loaded: true, loading: false }

        }
        case DELETE_EMPLOYEE_SUCCESS: {
            return { ...state, loaded: true, loading: false }

        }

        case DELETE_EMPLOYEE_FAILED: {
            return { ...state, loaded: true, loading: false , employee:{}, error: action.payload.response }
        }

        default:
            return state
    }
}