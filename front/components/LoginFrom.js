import React, {useCallback, useMemo} from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import useInput from '../hooks/useInput';
import {useDispatch} from 'react-redux';
import {loginAction} from '../reducers/user'
// import styled from 'styled-components';

// const ButtonWrapper = styled.div`
//     margin-top: 10px;
// `;

// const FormWrapper = styled(Form)`
//     padding: 10px;
// `;

const LoginForm = () => {
    const dispatch = useDispatch();
    const ButtonStyle=useMemo(()=>({marginTop:10}),[]);
    const FormStyle=useMemo(()=>({padding:10}),[])
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');

    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        dispatch(loginAction({id, password}));
    }, [id, password])

    return(
        //antd 에서 제공하는 onFinish는 PreventDefault가 이미 적용되어있다.
        <Form style={FormStyle} onFinish={onSubmitForm}>
            <div>
                {/* react에서 for->htmlFor */}
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <div style={ButtonStyle}>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    );
}

export default LoginForm;