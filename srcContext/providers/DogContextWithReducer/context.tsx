import React from 'react';
import {ValueType, MethodType, ContextDataType} from './types';

export const defaultValue: ValueType = {
  isFetching: false,
  dogImage: '',
  errorMessage: '',
  number: 0,
};

export const defaultMethod: MethodType = {
  increment: () => {},
  decrement: () => {},
  getDogImageRequest: () => undefined,
};

export const Context = React.createContext<ContextDataType>({
  ...defaultValue,
  ...defaultMethod,
});
