import React from 'react';
import styled from 'styled-components';
import Logowcs from '../assets/img/logo-WCS.svg';

const Logo = styled.div`
  background: url(${Logowcs}) no-repeat center/cover;
  width: 170px;
  height: 150px;
  margin: auto;
`;


export default function LogoWCS() {
    return (
        <Logo>
            
        </Logo>
    )
}
