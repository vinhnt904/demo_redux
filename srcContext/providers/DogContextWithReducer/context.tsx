import React from 'react';
import {ValueType, ContextDataType} from './types';

export const defaultValue: ValueType = {
  isFetching: false,
  dogImage: '',
  errorMessage: '',
  number: 0,
};

export const Context = React.createContext<ContextDataType | undefined>(
  undefined,
);
