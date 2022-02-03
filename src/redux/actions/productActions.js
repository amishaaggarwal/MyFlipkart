import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BASE_URL, GET_PRODUCT_DETAILS_FAILURE, GET_PRODUCT_DETAILS_SUCCESS, GET_PRODUCT_LIST_SUCCESS, TOGGLE_LOADING } from "constants/constants";

export function toggleLoading(status) {
  return {
    type: TOGGLE_LOADING,
    payload: status,
  };
}

export function getProductList() {
  return (dispatch) => {
    dispatch(toggleLoading(true));
    axios
      .get(BASE_URL)
      .then((result) => {
        dispatch(getProductListSuccess(result.data));
        dispatch(toggleLoading(false));
      })
      .catch((error) => dispatch(getProductListFailure(error)));
  };
}
function getProductListSuccess(result) {
  return {
    type: GET_PRODUCT_LIST_SUCCESS,
    payload: result,
  };
}
function getProductListFailure(error) {
  return toast.error(`Could not display user list: ${error}`);
}

export function getProductDetails(id) {
  return (dispatch) => {
    fetch(BASE_URL+`/${id}`)
      .then((res) => res.json())
      .then((result) => dispatch(getProductDetailsSuccess(result)))
      .catch((error) => dispatch(getProductDetailsFailure(error)));
  };
}
function getProductDetailsSuccess(result) {
  return {
    type: GET_PRODUCT_DETAILS_SUCCESS,
    payload: result,
  };
}
function getProductDetailsFailure() {
  return {
    type: GET_PRODUCT_DETAILS_FAILURE,
  };
}