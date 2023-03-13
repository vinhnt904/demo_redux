import React from 'react';
import api from '../../api';

import {ContextDataType} from './types';
import {Context, defaultValue} from './context';
import contextReducer from './reducer';

export function DogProvider(props: {children: React.ReactNode}) {
  const [state, dispatch] = React.useReducer(contextReducer, defaultValue);

  const contextValue = React.useMemo<ContextDataType>(() => {
    const increment = () => dispatch({type: 'increment'});
    const decrement = () => dispatch({type: 'decrement'});
    const getDogImageRequest = async () => {
      dispatch({type: 'getDogImage'});
      const response = await api.getDogImage();
      if (response.message) {
        dispatch({type: 'getDogSuccess', payload: response});
      } else {
        dispatch({type: 'getDogFailed'});
      }
      return response;
    };
    return {...state, increment, decrement, getDogImageRequest};
  }, [state]);

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}

export function useDog(): ContextDataType {
  return (
    React.useContext(Context) || {
      ...defaultValue,
      increment: () => {},
      decrement: () => {},
      getDogImageRequest: () => undefined,
    }
  );
}
