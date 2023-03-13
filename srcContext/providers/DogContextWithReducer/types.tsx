export type ValueType = {
  isFetching: boolean;
  dogImage: string;
  errorMessage: string;
  number: number;
};
export type MethodType = {
  increment: () => void;
  decrement: () => void;
  getDogImageRequest: (payload: any) => Promise<object> | undefined;
};

export type ContextDataType = ValueType & MethodType;

type ReducerType =
  | 'increment'
  | 'decrement'
  | 'getDogImage'
  | 'getDogSuccess'
  | 'getDogFailed';

export type ActionType = {type: ReducerType} & Record<string, any>;
