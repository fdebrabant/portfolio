import React from 'react';
import styled from 'styled-components';
import '../css/title.css';
import triangle from '../assets/img/triangle-title.svg';
import PropTypes from 'prop-types';

const OutTitle = styled.div`
   background: url(${triangle}) no-repeat center/cover; 
   width: 100px;
   height: 40px;
   margin: auto;
   margin-bottom: 30px;
`;

export default function Title(props) {
    const { color, text, outline } = props;

    return (
        <div>
            <h1 className={color}>{text}</h1>
            <OutTitle className={outline}/>      
        </div>
    )
}

Title.propTypes = {
    color: PropTypes.string,
    outline: PropTypes.string,
    text: PropTypes.string
};