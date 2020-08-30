import {
    FETCH_EMPLOYEES,
    FETCH_EMPLOYEES_SUCCESS,
    FETCH_EMPLOYEES_FAILED,
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
        default:
            return state
    }
}