import {
    GET_JOKES_REQUEST,
    GET_JOKES_FAILED,
    GET_JOKES_SUCCESS,
    CLEAR_JOKES
} from "../actions/searchTypes"

const initialState = {
    jokes: [],
    jokesFailed: false,
    jokesLoading: false
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOKES_REQUEST: {
            return {
                ...state,
                jokesFailed: false,
                jokesLoading: true
            };
        }
        case GET_JOKES_SUCCESS: {
            return {
                ...state,
                jokesLoading: false,
                jokes: action.jokes,
            }
        }
        case GET_JOKES_FAILED: {
            return {
                ...state,
                jokesFailed: true,
                jokesLoading: false
            }
        }
        case CLEAR_JOKES: {
            return {
                ...state,
                jokes: [],
            }
        }
        default: {
            return state;
        }
    }
}
