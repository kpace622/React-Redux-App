import { FETCH_DATA, UPDATE_INFO, SET_ERROR } from '../actions/index';

const initialState = {
    cards: [],
    isFetchingData: false
};

export const ageReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetchingData: true,
            };
            case UPDATE_INFO: 
                return {
                    ...state,
                    cards: action.payload,
                    isFetchingData: false
                };
            case SET_ERROR:
                return {
                    ...state,
                    isFetchingData: false,
                    error: action.payload
                };
            default:
                return state;
    }
}
