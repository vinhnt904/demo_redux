import {configureStore} from '@reduxjs/toolkit';

import rootReducer from './Reducers';

export default () => {
  return configureStore({
    reducer: rootReducer,
  });
};
