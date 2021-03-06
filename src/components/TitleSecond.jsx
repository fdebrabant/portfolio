import React from 'react';
import styled from 'styled-components';
import '../css/title.css';
import carres from '../assets/img/carres-title.svg';
import PropTypes from 'prop-types';

const AboveTitle = styled.div`
   background: url(${carres}) no-repeat center/cover; 
   width: 20px;
   height: 20px;
   margin: 0 10px;
   @media (max-width: 560px) {
    width: 15px;
   height: 15px;
  }
  @media (max-width: 560px) {
    width: 10px;
   height: 10px;
  }
`;

const Component = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-bottom: 30px;
    margin-top: 30px;
`;

export default function TitleSecond(props) {
    
    const { size, text } = props;
    return (
        <Component>
            <AboveTitle />    
                <h1 className={size}>{text}</h1>
            <AboveTitle />      
        </Component>
    )
}

TitleSecond.propTypes = {
    size: PropTypes.string,
    text: PropTypes.string
};