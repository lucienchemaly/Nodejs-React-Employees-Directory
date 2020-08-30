import {
    FETCH_DATA,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILED,
} from '../actions/actions-types';


const initialState = { 
    
    data: {
        loaded: false,
        loading: false,
        list: {}
    }
}


export default function homeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA: {
            return { ...state, data: { ...state.data, loaded: false, loading: true, list: [] } }

        }
        case FETCH_DATA_SUCCESS: {
            return { ...state, data: { ...state.data, loaded: true, loading: false, list: action.payload } }

        }

        case FETCH_DATA_FAILED: {
            return { ...state, data: { ...state.data, loaded: false, loading: false , list:action.payload} }
        }
        default:
            return state
    }
}