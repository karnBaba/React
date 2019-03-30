import { combineReducers } from 'redux';
import { authentication } from './authenticateReducer';
import { users } from './userReducer';


const rootReducer = combineReducers({
  authentication,
  users
});

export default rootReducer;