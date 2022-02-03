import {
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_LIST_SUCCESS,
  TOGGLE_LOADING,
} from "constants/constants";

const initialState = {
  product_list: [],
  loading: false,
};

const productreducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        product_list: action.payload,
      };
    case GET_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        product:action.payload,
      }
    default:
      return state;
  }
};
export default productreducer;
