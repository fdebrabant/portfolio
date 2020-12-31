import React from 'react';
import styled from 'styled-components';
import bannerLeft from '../assets/img/banner-Left-mob.svg';
import bannerRight from '../assets/img/banner-Right-mob.svg';

const HeadBanner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BannerL = styled.div`
  height: 350px;
  width: 290px;
  background: url(${bannerLeft}) no-repeat center/cover;
  z-index: 100;
  @media (min-width: 450px) {
    height: 520px;
  }
  @media (min-width: 830px) {
    height: 640px;
    width: 400px;
  }
  @media (min-width: 1150px) {
    height: 820px;
    width: 510px;
  }
`;

const BannerR = styled.div`
  height: 350px;
  width: 290px;
  background: url(${bannerRight}) no-repeat center/cover;
  z-index: 100;
  @media (min-width: 450px) {
    height: 520px;
  }
  @media (min-width: 830px) {
    height: 640px;
    width: 400px;
  }
  @media (min-width: 1150px) {
    height: 820px;
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
