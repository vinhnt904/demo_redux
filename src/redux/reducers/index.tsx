import {combineReducers} from 'redux';
import dogImageReducer from './dogImageReducer';

const rootReducer = combineReducers({
  dogImageReducer,
});

export default rootReducer;
