import React from 'react';
import api from '../api';

type ValueType = {
  isFetching: boolean;
  dogImage: string;
  errorMessage: string;
  number: number;
};
type MethodType = {
  increment: () => void;
  decrement: () => void;
  getDogImageRequest: (payload: any) => Promise<object> | undefined;
};
type ContextDataType = ValueType & MethodType;

const defaultValue: ContextDataType = {
  isFetching: false,
  dogImage: '',
  errorMessage: '',
  number: 0,
  increment: () => {},
  decrement: () => {},
  getDogImageRequest: () => undefined,
};

const Context = React.createContext<ContextDataType>(defaultValue);

export function DogProvider(props: {children: React.ReactNode}) {
  const [state, setState] = React.useState<ValueType>(defaultValue);

  const increment = React.useCallback(() => {
    setState(currentState => ({
      ...currentState,
      number: currentState.number + 1,
    }));
  }, []);

  const decrement = React.useCallback(() => {
    setState(currentState => ({
      ...currentState,
      number: currentState.number - 1,
    }));
  }, []);

  const getDogImageRequest = React.useCallback(async () => {
    setState(c => ({...c, isFetching: true}));
    const response = await api.getDogImage();
    if (response.message) {
      setState(c => ({...c, isFetching: false, dogImage: response.message}));
    } else {
      setState(c => ({
        ...c,
        isFetching: false,
        errorMessage: 'An error occur',
      }));
    }
    return response;
  }, []);

  const contextValue = React.useMemo<ContextDataType>(() => {
    return {...state, increment, decrement, getDogImageRequest};
  }, [state, increment, decrement, getDogImageRequest]);

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}

export function useDog(): ContextDataType {
  return React.useContext(Context);
}
