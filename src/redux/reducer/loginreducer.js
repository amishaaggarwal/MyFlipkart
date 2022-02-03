import { GET_USER, LOGGED_IN } from "constants/constants";

const initialState = {
  loggedIn: "",
};

const loginreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default loginreducer;
