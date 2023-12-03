// reducers.js
import {
  GET_TODOS,
  GET_TODOS_FAILED,
  GET_TODOS_SUCCESS,
  SEND_POST,
  SEND_POST_FAILED,
  SEND_POST_SUCCESS,
} from "./actions";

const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case GET_TODOS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case SEND_POST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case SEND_POST_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    }
    case SEND_POST_FAILED: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
