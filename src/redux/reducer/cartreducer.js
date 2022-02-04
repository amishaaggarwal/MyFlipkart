import {
  ADD_TO_CART,
  ADD_TO_RECENTLY_VIEWED,
  GET_CART_ITEMS_FAILURE,
  GET_CART_ITEMS_SUCCESS,
  GET_RECENTLY_VIEWED_ITEMS_FAILURE,
  GET_RECENTLY_VIEWED_ITEMS_SUCCESS,
  PLUS_MINUS_ITEM,
  REMOVE_FROM_CART,
  TOGGLE_LOADING,
} from "constants/constants";
import { setLocalStorage } from "Storage/storage";

const initialState = {
  cart_items: [],
  recently_viewed: [],
  loading: false,
};

const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CART_ITEMS_SUCCESS:
      return {
        ...state,
        cart_items: action.payload,
      };
    case GET_CART_ITEMS_FAILURE:
      return {
        ...state,
      };
    case ADD_TO_CART: {
      const item = action.payload;
      const existItem = state.cart_items.find(
        (product) => product.details.id === item.details.id
      );
      if (existItem) return { ...state };
      else {
        setLocalStorage("cart", item);
        return { ...state, cart_items: [...state.cart_items, item] };
      }
    }
    case PLUS_MINUS_ITEM: {
      let item = action.payload;
      let existCart = state.cart_items;
      for (let i = 0; i < existCart.length; i++) {
        if (item.details.id === existCart[i].details.id) {
          existCart[i] = item;
          break;
        }
      }
      return {
        ...state,
        cart_items: existCart,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart_items: state.cart_items.filter(
          (product) => product.details.id !== action.payload
        ),
      };
    }
      
    case GET_RECENTLY_VIEWED_ITEMS_SUCCESS:
      return {
        ...state,
        recently_viewed: action.payload,
      };
    case GET_RECENTLY_VIEWED_ITEMS_FAILURE:
      return {
        ...state,
      };
    case ADD_TO_RECENTLY_VIEWED:
      const item = action.payload;
      const existItem = state.recently_viewed.find(
        (product) => product.id === item.id
      );
      if (existItem) return { ...state };
      else {
        setLocalStorage("recently_viewed", item);
        return { ...state, recently_viewed: [...state.recently_viewed, item] };
      }
    default:
      return state;
  }
};

export default cartreducer;
