import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';

import rootReducer from './reducers';

const configureStore = () => {
  const enhancer =
    composeWithDevTools(/*any middleware ex: redux-thunk, redux-saga, ...*/);

  return createStore(rootReducer, enhancer);
};

export default configureStore;
