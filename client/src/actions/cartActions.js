import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/reducerConstants';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = axios.get(`/api/products/${id}`);

    const { id, name, image, price, count_in_stock } = data.product;

    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: id,
        name,
        image,
        price,
        count_in_stock,
        qty,
      },
    });

    // Save the cart item to the localStorage
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (error) {
    const err = error.response.data;
    console.error(err);
  }
};
