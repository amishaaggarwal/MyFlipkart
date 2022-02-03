import { combineReducers } from "redux";
import cartreducer from "redux/reducer/cartreducer";
import productreducer from "redux/reducer/productreducer";
import loginreducer from "redux/reducer/loginreducer";

export default combineReducers({
  cart:cartreducer,
  products: productreducer,
  user:loginreducer,
});