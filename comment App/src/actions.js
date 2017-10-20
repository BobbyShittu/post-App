import { ADD_COMMENTS , DELETE_COMMENTS, EDIT_COMMENTS} from "./types.js";

let nextComment = 0;
export const addComments = text => {
  return {
    type: ADD_COMMENTS,
    id: nextComment++,
    text
  };
};




export const deleteComments = id => {
    return {
        type: DELETE_COMMENTS,
        id

    };
};

export const editComment = (text,id) => {
    return {
        type: EDIT_COMMENTS,
        id,
        text
    }
}

