import { GET_USER, LOGGED_IN } from "constants/constants";
import { getLocalStorage, setLocalStorage } from "Storage/storage";

export function setLoggedIn(user) {
  setLocalStorage("authToken", user);
  return {
    type: LOGGED_IN,
    payload: user,
  };
}
export function getUser() {
    let user = getLocalStorage("authToken");
  return {
    type: GET_USER,
    payload:user,
  };
}
