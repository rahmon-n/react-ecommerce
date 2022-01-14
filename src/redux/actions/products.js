import { SET_PRODUCTS } from './actionTypes';
import axios from 'axios';

export const getProducts = () => (dispatch) => {
  axios.get('/db.json').then(({ data }) => {
    dispatch(setProducts(data.products));
  });
};

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};
