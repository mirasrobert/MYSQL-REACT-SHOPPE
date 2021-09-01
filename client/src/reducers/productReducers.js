import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/reducerConstatants';

const defaultState = {
  products: [],
};

export const productListReducer = (state = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };

    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: payload,
      };

    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};
