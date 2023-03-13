import {ValueType, ActionType} from './types';

export default (state: ValueType, action: ActionType) => {
  console.log(`Action type: ${action.type}`);
  switch (action.type) {
    case 'increment':
      return {...state, number: state.number + 1};
    case 'decrement':
      return {...state, number: state.number - 1};
    case 'getDogImage':
      return {...state, isFetching: true};
    case 'getDogSuccess':
      return {...state, isFetching: false, dogImage: action.payload?.message};
    case 'getDogFailed':
      return {...state, isFetching: false, errorMessage: 'An error occur'};
    default:
      return state;
  }
};
