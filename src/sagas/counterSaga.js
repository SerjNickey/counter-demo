import { put, takeEvery, all } from 'redux-saga/effects';


const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* addAsync() {
  yield delay(1000)
  yield put({ type: 'ADD', payload: 20 });
}

function* watchAddAsync() {
  yield takeEvery('ADD_ASYNC/TRIGGER', addAsync);
}

function* subAsync() {
  yield delay(1000)
  yield put({ type: 'SUB', payload: 20 });
}

function* watchSubAsync() {
  yield takeEvery('SUB_ASYNC/TRIGGER', subAsync);
}


export default function* counterSaga() {
  yield all([
    watchAddAsync(),
    watchSubAsync()
  ])
}