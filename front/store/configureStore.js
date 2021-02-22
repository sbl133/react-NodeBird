import {compose, createStore, applyMiddleware} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import reducer from '../reducers'
import {composeWithDevTools} from 'redux-devtools-extension';
const configureStore = () => {
    const middleware = [];
    //enhancer : redux기능확장
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middleware)) 
        //보안상의 이유로 배포용일때는 devtool연결 x
        : composeWithDevTools(applyMiddleware(...middleware)) //개발용일땐 o
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV === 'development'});
export default wrapper;