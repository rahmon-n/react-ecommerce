import {
  ADD_TO_CART,
  MINUS_CART_ITEM,
  PLUS_ITEM_TO_CART,
  REMOVE_CART_ITEM,
} from '../actions/actionTypes';

export const addToCart = (productObj) => ({
  type: ADD_TO_CART,
  payload: productObj,
});

export const plusItemToCart = (productId) => ({
  type: PLUS_ITEM_TO_CART,
  payload: productId,
});

export const minusCartItem = (productId) => ({
  type: MINUS_CART_ITEM,
  payload: productId,
});

export const removeCartItem = (productId) => ({
  type: REMOVE_CART_ITEM,
  payload: productId,
});
