import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';
import axios from 'axios';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector((state) => state.user);
    const { mainPosts, hasMorePosts, loadPostsLoading, retweetError,
        } = useSelector((state) => state.post);

    useEffect(() => {
        if (retweetError) {
            alert(retweetError);
        }
    }, [retweetError]);
    useEffect(() => {
        function onScroll() {
            // scrollY : 현재위치 clientHeight : 현재화면길이 scrollHeight : 스크롤총길이
            // (끝까지내린)scrollY + clientHeight = scrollHeight
            if (window.scrollY + document.documentElement.clientHeight >
                document.documentElement.scrollHeight - 300) {
                    const lastId = mainPosts[mainPosts.length - 1]?.id;
                if (hasMorePosts && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_POSTS_REQUEST,
                        lastId,
                    });
                }
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [hasMorePosts, loadPostsLoading, mainPosts]);
    return (
        <AppLayout>
            {me && <PostForm />}
            {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
        </AppLayout>
    );
};
// context안에 store가 들어있음
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) { // 쿠키공유차단
        axios.defaults.headers.Cookie = cookie; // 서버로 쿠키전달
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
        type: LOAD_POSTS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Home;
