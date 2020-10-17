import { combineReducers } from 'redux';
import authenticationReducer from './authenticationReducer';
import alertReducer from './alertReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  authenticationReducer,
  alertReducer,
  profileReducer,
});
