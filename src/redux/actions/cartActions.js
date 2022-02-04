import {
  ADD_TO_CART,
  ADD_TO_RECENTLY_VIEWED,
  GET_CART_ITEMS_FAILURE,
  GET_CART_ITEMS_SUCCESS,
  GET_RECENTLY_VIEWED_ITEMS_FAILURE,
  GET_RECENTLY_VIEWED_ITEMS_SUCCESS,
  PLUS_MINUS_ITEM,
  TOGGLE_LOADING,
  REMOVE_FROM_CART,
} from "constants/constants";
import { toast } from "react-toastify";
import { getLocalStorage } from "Storage/storage";

export function toggleLoading(status) {
  return {
    type: TOGGLE_LOADING,
    payload: status,
  };
}

export function addToCart(fields) {
  const item = {
    details: fields,
    quantity: 1,
  };
  return {
    type: ADD_TO_CART,
    payload: item,
  };
}

export function plusMinusItem(fields) {
  toast.success(`You've changed '${fields.details.name}' QUANTITY to '${fields.quantity}'`, {
    position: toast.POSITION.BOTTOM_LEFT,
    className: "dark-toast",
  });
  return {
    type: PLUS_MINUS_ITEM,
    payload: fields,
  };
}
export function getCartItems() {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    const rows = JSON.parse(getLocalStorage("cart"));
    if (rows) {
      dispatch(getCartItemsSuccess(rows));
      dispatch(toggleLoading(false));
    } else {
      dispatch(getCartItemsFailure());
    }
  };
}

function getCartItemsSuccess(result) {
  return {
    type: GET_CART_ITEMS_SUCCESS,
    payload: result,
  };
}

function getCartItemsFailure() {
  
  return {
    type: GET_CART_ITEMS_FAILURE,
  };
}

export function addToRecentlyViewed(fields) {
  return {
    type: ADD_TO_RECENTLY_VIEWED,
    payload: fields,
  };
}

export function getRecentlyViewedItems() {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    const rows = JSON.parse(getLocalStorage("recently_viewed"));
    if (rows) {
      dispatch(getRecentlyViewedItemsSuccess(rows));
      dispatch(toggleLoading(false));
    } else {
      dispatch(getRecentlyViewedItemsFailure());
    }
  };
}

function getRecentlyViewedItemsSuccess(result) {
  return {
    type: GET_RECENTLY_VIEWED_ITEMS_SUCCESS,
    payload: result,
  };
}

function getRecentlyViewedItemsFailure() {
  return {
    type: GET_RECENTLY_VIEWED_ITEMS_FAILURE,
  };
}

export function removeFromCart(id,name) {
  toast.success(`Successfully removed ${name} from your cart!`, {
    position: toast.POSITION.BOTTOM_LEFT,
    className: 'dark-toast'
  });
  let old_cart = JSON.parse(getLocalStorage("cart"));
  let index;
  for (let i = 0; i < old_cart.length; i++) {
    if (old_cart[i].details.id === id) {
      index = i;
      break;
    }
  }
  if (index === undefined) return;
  old_cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(old_cart));
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
}
