import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import checkAuthedUser from './middleware/checkAuthedUser';
import logger from './middleware/logger';
import {thunk} from 'redux-thunk';

const middleware = [ checkAuthedUser,thunk,logger];

const store = configureStore({
  reducer: rootReducer,
  middleware: () => [...middleware],
});

export default store;
