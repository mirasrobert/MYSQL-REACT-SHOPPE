import axios from 'axios';
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
} from '../constants/reducerConstatants';

// @desc Get the list of Products
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      action:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
