import axios from 'axios';
import { all, call, fork, put, takeLatest, throttle } from 'redux-saga/effects';
// all: 안에있는effects동시실행 fork: 비동기함수호출 call: 동기함수호출 put: dispatch
// take: 기다린다(동기) takeEvery: 기다린다.(비동기)
// throttle 인자밀리초안에 한번만 take
import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE,
    LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE,
    UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE,
    RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE,
    LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE,
    LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_FAILURE, LOAD_USER_POSTS_SUCCESS,
    LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_FAILURE, LOAD_HASHTAG_POSTS_SUCCESS,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadUserPostsAPI(data, lastId) {
    return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`);// 쿼리스트링 ?키=값
    // get의 두번쨰인자는 withCredentials자리
}
function* loadUserPosts(action) {
    try {
        const result = yield call(loadUserPostsAPI, action.data, action.lastId);
        yield put({
            type: LOAD_USER_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}
function loadHashtagPostsAPI(data, lastId) { // encodeURIComponent:주소값 한글로쓸수있
    return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);// 쿼리스트링 ?키=값
    // get의 두번쨰인자는 withCredentials자리
}
function* loadHashtagPosts(action) {
    try {
        const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
        yield put({
            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}
function retweetAPI(data) {
    return axios.post(`/post/${data}/retweet`);// FormData그대로 back에 전달
}
function* retweet(action) {
    try {
        const result = yield call(retweetAPI, action.data);
        yield put({
            type: RETWEET_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: RETWEET_FAILURE,
            error: err.response.data,
        });
    }
}
function uploadImagesAPI(data) {
    return axios.post('/post/images', data);// FormData그대로 back에 전달
}
function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        });
    }
}
function likePostAPI(data) {
    return axios.patch(`/post/${data}/like`);
}
function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
}
function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function loadPostAPI(data) {
    return axios.get(`/post/${data}`);
}
function* loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function loadPostsAPI(lastId) {
    return axios.get(`/posts?lastId=${lastId || 0}`);// 쿼리스트링 ?키=값
    // get의 두번쨰인자는 withCredentials자리
}
function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.lastId);
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data,
        });
    }
}
function addPostAPI(data) {
    return axios.post('/post', data);
}
function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        });
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function removePostAPI(data) {
    return axios.delete(`post/${data}`); // delete는 data못넣요
}
function* removePost(action) {
    try {
        const result = yield call(removePostAPI, action.data);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: result.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: result.data,
        });
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        });
    }
}
function addCommentAPI(data) {
    return axios.post(`/post/${data.postId}/comment`, data);
}
function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
function* watchLoadPosts() {
    yield takeLatest(LOAD_POSTS_REQUEST, loadPosts);
}
function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}
function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}
function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}
function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}
function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet);
}
function* watchLoadUserPosts() {
    yield throttle(5000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
}
function* watchLoadHashtagPosts() {
    yield throttle(5000, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}
export default function* postSaga() {
    yield all([
        fork(watchRetweet),
        fork(watchUploadImages),
        fork(watchAddPost),
        fork(watchLoadPost),
        fork(watchLoadPosts),
        fork(watchLoadUserPosts),
        fork(watchLoadHashtagPosts),
        fork(watchAddComment),
        fork(watchRemovePost),
        fork(watchLikePost),
        fork(watchUnlikePost),
    ]);
}
