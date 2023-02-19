import {actionTypes} from '../actions';

const initialState = {
  isFetching: false,
  dogImage: '',
  errorMessage: '',
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case actionTypes.GET_DOG_IMAGE.REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case actionTypes.GET_DOG_IMAGE.SUCCESS:
      return {
        ...state,
        isFetching: false,
        dogImage: action.payload.message,
      };
    case actionTypes.GET_DOG_IMAGE.ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: 'An error occurred',
      };
    default:
      return state;
  }
}
