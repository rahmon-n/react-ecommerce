import { SET_PRODUCTS } from '../actions/actionTypes';

const initialState = {
  products: [],
  isLoaded: false,
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        isLoaded: true,
      };
    default:
      return state;
  }
}
