import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import UserProfile from './UserProfile';
import LoginForm from './LoginFrom';
// import styled from 'styled-components';

// inline style을 객체로 설정하면 렌더링될때마다 값이 다르다고 인식해서 리렌더링된다.
// 그것을 방지하기위해 커스텀으로 style설정을 한다.
// const SearchInput = styled(Input.Search)`
//     vertical-align: middle;
// `;
const Global = createGlobalStyle`
    .ant-row{
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .ant-col:first-child {
        padding-left: 0 !importatnt;
    }
    .ant-col:last-child{
        padding-right: 0 !important;
    }
`;
const AppLayout = ({ children }) => { // children: 해당component안에 있는 element?
    const { me } = useSelector((state) => state.user);
    const InputSearchStyle = useMemo(() => ({ verticalAlign: 'middle' }));
    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                <Input.Search style={InputSearchStyle} enterButton />
                </Menu.Item>
                <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {/* xs:모바일 sm:태블릿 md:작은데스크탑 gutter:간격(pedding) */}
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    {/* target="_blank" 새창으로 링크연결을 할때에는 rel="nore---"(보안상 기입) */}
                    <a href="https://github.com/sbl133" target="_blank" rel="noreferrer noopener">Made by Bum</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = { // props의 type확인
    // node: number, string, elements, array등을 통칭,
    // isRequired: 실제type과 기입한 type이 다르면 오류메세지출력
    children: PropTypes.node.isRequired,
};
export default AppLayout;
