import { combineReducers } from 'redux';
//import reducers
import authReducer from './authReducer';
import { reducer as formReducer} from 'redux-form';

export default combineReducers({
    auth : authReducer,
    form: formReducer
})