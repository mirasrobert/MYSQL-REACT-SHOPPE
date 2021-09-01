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
    // Get the errors
    const err = error.response.data;

    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: err.message,
    });
  }
};
