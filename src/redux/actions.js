export const GET_TODOS = "GET_TODOS";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILED = "GET_TODOS_FAILED";
export const SEND_POST = 'SEND_POST';
export const SEND_POST_SUCCESS = 'SEND_POST_SUCCESS';
export const SEND_POST_FAILED = 'SEND_POST_FAILED';

export const getTodos = (data) => ({
  type: GET_TODOS,
  payload: data,
});

export const getTodosSuccess = (data) => ({
  type: GET_TODOS_SUCCESS,
  payload: data,
});

export const getTodosFailed = (data) => ({
  type: GET_TODOS_FAILED,
  payload: data,
});

export const sendPost = (data) => ({
  type: SEND_POST,
  payload: data,
});

export const sendPostSuccess = (data) => ({
  type: SEND_POST_SUCCESS,
  payload: data,
});

export const sendPostFailed = (data) => ({
  type: SEND_POST_FAILED,
  payload: data,
});
