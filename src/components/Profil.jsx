import React from 'react';
import styled from 'styled-components';
import photo from '../assets/img/photo.svg';
import triangle from '../assets/img/triangle.svg';

const Photo = styled.div`
    background: url(${photo}) no-repeat center/cover;
    /* z-index: 10; */
    width: 133px;
    height: 133px;
    position: absolute;
    left: 46px;
    top: 44px;
    @media (min-width: 830px) {
    width: 170px;
    height: 170px;
    left: 63px;
    top: 65px;

  }
    @media (min-width: 1150px) {
    height: 200px;
    width: 200px;
    left: 78px;
    top: 76px;
    }
`;

const Triangle = styled.div`
    background: url(${triangle}) no-repeat center/cover;
    width: 225px;
    height: 235px;
    position: absolute;

    @media (min-width: 830px) {
    width: 296px;
    height: 300px;
  }
    @media (min-width: 1150px) {
    height: 362px;
    width: 356px;
  }

`;

const Container = styled.div`
    position: relative;
    width: 225px;
    height: 235px;
    margin: auto;
    margin-top: 18px;

    @media (min-width: 830px) {
    width: 296px;
    height: 300px;
  }
    @media (min-width: 1150px) {
    height: 362px;
    width: 356px;
  }
`;


export default function Profil() {
    return (
        <Container>
            <Triangle />
            <Photo />
        </Container>
    )
}
