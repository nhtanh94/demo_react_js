const initialState = {
  listCourse: [],
  detailCourse: {},
};
const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_LIST_COURSE":
      console.log("GET_LIST_COURSE" + action.payload);
      state.listCourse = action.payload;
      return { ...state };

    case "GET_DETAIL_COURSE":
      console.log("GET_DETAIL_COURSE" + action.payload);
      state.detailCourse = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default courseReducer;
