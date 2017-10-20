import { ADD_COMMENTS, DELETE_COMMENTS, EDIT_COMMENTS } from "./types.js";

//const initialState = { text: "", id: 0 };

const reducer = (state = [], action) => {
  switch (action.type) {
      case ADD_COMMENTS:
          console.log(action);
          console.log(state);
          return [ ...state, {text: action.text, id: action.id } ];
      case DELETE_COMMENTS:
          console.log(action);
          return [...state.filter(b => b.id !== action.id)];
      case EDIT_COMMENTS:
          console.log(action);
          return [...state, { text:action.text, id: action.id }]
    default:
      return state;
  }
};

export default reducer;
