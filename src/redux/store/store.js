import { createStore, applyMiddleware } from "redux";
import rootReducer from "redux/reducer/rootreducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk,logger));
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default store;
