import React from 'react';
import styled from 'styled-components';

import OzTube from '../img/logo.png';

const Container = styled.div`
    flex: 1;
    background-color: #202020;
    height: 100vh;
    color: #fff;
    font-size: 14px;
`;

const Wrapper = styled.div`
    padding: 18px 26px;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: 25px;
    gap: 5px;
`;

const Img = styled.img`
    height: 25px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`;

function Menu() {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <Img src={OzTube} />
                    OzTube
                </Logo>
                <Item>Home</Item>
            </Wrapper>
        </Container>
    );
}

export default Menu;
