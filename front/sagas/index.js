import { all, fork } from 'redux-saga/effects';
// all: 안에있는effects동시실행 fork: 비동기함수호출 call: 동기함수호출 put: dispatch
// take: 기다린다(동기) takeEvery: 기다린다.(비동기)

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
    yield all([
        fork(postSaga),
        fork(userSaga),
    ]);
}
