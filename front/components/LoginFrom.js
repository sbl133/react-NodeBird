import React, { useCallback, useMemo } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { loginRequestAction } from '../reducers/user';
// import styled from 'styled-components';

// const ButtonWrapper = styled.div`
//     margin-top: 10px;
// `;

// const FormWrapper = styled(Form)`
//     padding: 10px;
// `;

const LoginForm = () => {
    const dispatch = useDispatch();
    const { logInLoading } = useSelector((state) => state.user);
    const ButtonStyle = useMemo(() => ({ marginTop: 10 }), []);
    const FormStyle = useMemo(() => ({ padding: 10 }), []);
    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(email, password);
        dispatch(loginRequestAction({ email, password }));
    }, [email, password]);

    return (
        // antd 에서 제공하는 onFinish는 PreventDefault가 이미 적용되어있다.
        <Form style={FormStyle} onFinish={onSubmitForm}>
            <div>
                {/* react에서 for->htmlFor */}
                <label htmlFor="user-email">이메일</label>
                <br />
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <div style={ButtonStyle}>
                <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    );
};

export default LoginForm;
