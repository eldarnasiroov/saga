// sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import {
  GET_TODOS,
  getTodosSuccess,
  getTodosFailed,
  sendPostSuccess,
  sendPostFailed,
  SEND_POST
} from './actions';
import { API } from '../api';


function* getTodosSaga(action) {
  try {
    const data = yield call(API.getTodos, action.payload);
    yield put(getTodosSuccess(data));
  } catch (error) {
    yield put(getTodosFailed(error));
  }
}

function* sendPostSaga (action) {
  try {
    const data = yield call(API.sendPost, action.payload);
    yield put(sendPostSuccess(data));
  } catch (err) {
    yield put(sendPostFailed(err));
  }
}

export default function* rootSaga() {
  yield takeEvery(GET_TODOS, getTodosSaga);
  yield takeEvery(SEND_POST, sendPostSaga);
}
