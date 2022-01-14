import {
  ADD_TO_CART,
  MINUS_CART_ITEM,
  PLUS_ITEM_TO_CART,
  REMOVE_CART_ITEM,
} from '../actions/actionTypes';

const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const allProducts = (obj) => [].concat.apply([], Object.values(obj));
const totalPrice = (arr) => arr.reduce((sum, obj) => sum + obj.price, 0);

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      return {
        ...state,
        items: newItems,
        totalCount: allProducts(newItems).length,
        totalPrice: totalPrice(allProducts(newItems)),
      };
    }
    case MINUS_CART_ITEM: {
      const oldItems = state.items[action.payload];
      const removeItems = oldItems.length > 1 ? state.items[action.payload].slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: removeItems,
      };
      return {
        ...state,
        items: newItems,
        totalCount: allProducts(newItems).length,
        totalPrice: totalPrice(allProducts(newItems)),
      };
    }
    case PLUS_ITEM_TO_CART: {
      const newItems = {
        ...state.items,
        [action.payload]: [...state.items[action.payload], state.items[action.payload][0]],
      };

      return {
        ...state,
        items: newItems,
        totalCount: allProducts(newItems).length,
        totalPrice: totalPrice(allProducts(newItems)),
      };
    }

    case REMOVE_CART_ITEM: {
      const newItems = { ...state.items };
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: totalPrice(allProducts(newItems)),
        totalCount: allProducts(newItems).length,
      };
    }

    default:
      return state;
  }
}
