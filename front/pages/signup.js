import React, { useCallback, useState, useMemo, useEffect } from 'react';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const Signup = () => {
    const divStyle = useMemo(() => ({ color: 'red' }), []);
    const dispatch = useDispatch();
    const { signUpLoading, signUpDone, signUpError, me } = useSelector((state) => state.user);

    useEffect(() => {
        if (me && me.id) {
            Router.replace('/');
        }
    }, [me && me.id]);
    useEffect(() => {
        if (signUpDone) {
            Router.replace('/');
        }
    }, [signUpDone]);
    useEffect(() => {
        if (signUpError) {
            alert(signUpError);
        }
    }, [signUpError]);
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState('');
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);
    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(email, nickname, password);
        return dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        });
    }, [password, passwordCheck, term]);
    return (
        <>
            <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
                <label htmlFor="user-nickname">닉네임</label>
                <br />
                <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <div>
                <label htmlFor="user-password-check">비밀번호체크</label>
                <br />
                <Input
                    name="user-password-check"
                    type="password"
                    value={passwordCheck}
                    required
                    onChange={onChangePasswordCheck}
                />
                {passwordError && <div style={divStyle}>비밀번호가 일치하지 않습니다.</div>}
            </div>
            <div>
                <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>운영자의 말을 잘 들을 것을 동의힙니다.</Checkbox>
                {termError && <div style={divStyle}>약관에 동의하셔야 합니다.</div>}
            </div>
            <div style={{ marginTop: 10 }}>
                <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
            </div>
            </Form>
            </AppLayout>
        </>
    );
};
export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) { // 쿠키공유차단
        axios.defaults.headers.Cookie = cookie; // 서버로 쿠키전달
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});
export default Signup;
