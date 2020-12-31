import React from 'react';
import styled from 'styled-components';
import bannerLeft from '../assets/img/banner-Left-mob.svg';
import bannerRight from '../assets/img/banner-Right-mob.svg';

const HeadBanner = styled.div`
  position: relative;
`;

const BannerL = styled.div`
  position: absolute;
  left: 0;
  height: 350px;
  width: 160px;
  background: url(${bannerLeft}) no-repeat center/cover;
  @media (min-width: 450px) {
    height: 520px;
    width: 296px;
  }
  @media (min-width: 830px) {
    height: 701px;
    width: 400px;
  }
  @media (min-width: 1150px) {
    height: 895px;
    width: 510px;
  }
`;

const BannerR = styled.div`
  height: 350px;
  width: 160px;
  position: absolute;
  right: 0;
  background: url(${bannerRight}) no-repeat center/cover;
  @media (min-width: 450px) {
    height: 520px;
    width: 296px;
  }
  @media (min-width: 830px) {
    height: 701px;
    width: 400px;
  }
  @media (min-width: 1150px) {
    height: 895px;
    width: 510px;
  }
`;

export default function Banner() {
    return (
        <HeadBanner>
            <BannerL />
            <BannerR />        
        </HeadBanner>
    )
}
