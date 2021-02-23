import axios from 'axios';
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
// all: 안에있는effects동시실행 fork: 비동기함수호출 call: 동기함수호출 put: dispatch
// take: 기다린다(동기) takeEvery: 기다린다.(비동기)

import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
} from '../reducers/post';

function addPostAPI(data) {
    return axios.post('/api/post', data);
}
function* addPost(action) {
    try {
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        });
    }
}
function addCommentAPI(data) {
    return axios.post(`/api/post/${data.id}/comment`, data);
}
function* addComment() {
    try {
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        });
    }
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ]);
}
