export const SET_DATA = 'SET_DATA';
export const SET_LOADING = 'SET_LOADING';
export const SET_LOADED = 'SET_LOADED';

export const loading = () => {
    return {
        type: SET_LOADING
    }
}

export const loaded =() => {
    return {
        type: SET_LOADED
    }
}

export const setData = (moviesArray) => {
    return {
        type: SET_DATA,
        payload: {
            moviesArray
        }
    }
}