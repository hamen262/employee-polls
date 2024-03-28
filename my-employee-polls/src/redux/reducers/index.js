import { combineReducers } from 'redux';
import users from './users';
import authedUser from './authedUser';

const rootReducer = combineReducers({
  users,
  authedUser
});

export default rootReducer;