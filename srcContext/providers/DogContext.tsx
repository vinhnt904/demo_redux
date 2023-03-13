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

const defaultValue: ValueType = {
  isFetching: false,
  dogImage: '',
  errorMessage: '',
  number: 0,
};
const defaultMethod: MethodType = {
  increment: () => {},
  decrement: () => {},
  getDogImageRequest: () => undefined,
};
const Context = React.createContext<ContextDataType>({
  ...defaultValue,
  ...defaultMethod,
});

export function DogProvider(props: {children: React.ReactNode}) {
  const [state, setState] = React.useState<ValueType>(defaultValue);

  const contextValue = React.useMemo<ContextDataType>(() => {
    const increment = () =>
      setState(currentState => ({
        ...currentState,
        number: currentState.number + 1,
      }));

    const decrement = () =>
      setState(currentState => ({
        ...currentState,
        number: currentState.number - 1,
      }));

    const getDogImageRequest = async () => {
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
    };

    return {...state, increment, decrement, getDogImageRequest};
  }, [state]);

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}

export function useDog(): ContextDataType {
  return React.useContext(Context);
}
