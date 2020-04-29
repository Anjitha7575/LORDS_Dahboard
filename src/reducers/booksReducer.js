import {FETCH_ALL_BOOKS} from '../actionTypes';

export default function(state={},action){
    switch(action.type){
        case FETCH_ALL_BOOKS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};