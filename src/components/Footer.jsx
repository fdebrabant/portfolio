import React from 'react';
import styled from 'styled-components';
import footer from '../assets/img/footer.svg'

const FooterImage = styled.div`
 background: url(${footer}) no-repeat center/cover;
 height:250px;
 margin: auto;
 @media (min-width: 450px) {
    height: 300px;
    width: 500px
  }
  @media (min-width: 830px) {
    height: 500px;
    width: 800px
  }
 @media (min-width: 1150px) {
    height:600px;
    width:1100px
  }
`;

export default function Footer() {
    return (
        <div>
            <FooterImage />
        </div>
    )
}
