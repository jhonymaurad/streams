import {
    EDIT_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    CREATE_STREAM,
    DELETE_STREAM
} from '../actions/types';

export default (state= {}, action)=>{
    switch(action.type){
        case FETCH_STREAM:
            return ;
        default:
            return state;
    }

};