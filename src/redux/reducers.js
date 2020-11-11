const { SET_LOADING, SET_LOADED, SET_DATA } = require("./action");

const defaultState = {
    loading: false,
    results: [],
}

export const searchReducer = (state=defaultState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_LOADED: 
            return {
                ...state,
                loading: false
            }
        case SET_DATA:
            return {
                ...state,
                results: action.payload.moviesArray,
                loading: false,
            }
        default:
            return state;
    }
}