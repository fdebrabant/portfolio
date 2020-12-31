import React from 'react';
import styled from 'styled-components';
import '../css/title.css';
import triangle from '../assets/img/triangle-title.svg';

const OutTitle = styled.div`
   background: url(${triangle}) no-repeat center/cover; 
   width: 100px;
   height: 40px;
   margin: auto;

`;

export default function Title(props) {
    return (
        <div>
        <h1 className={props.color}>{props.text}</h1>
        <OutTitle className={props.outline}/>      
        </div>
    )
}
