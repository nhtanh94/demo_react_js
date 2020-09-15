import { SET_TOKEN } from "../actions/actionType";

const initialState = {
  token: "",
  //..profile:null
};
const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      state.token = payload;
      return { ...state };
    default:
      return state;
  }
};
export default authReducer;
