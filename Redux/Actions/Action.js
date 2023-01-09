import { ADD_BOOK } from "../Constants/Action-type"
import {EDIT_BOOK} from "../Constants/Action-type"

export const addBook = (payload) => {
    return {
        type : ADD_BOOK ,
        payload: payload,
    }
}

export const editBook = (payload) => {
  return {
    type: EDIT_BOOK,
    payload: payload,
  };
};



 