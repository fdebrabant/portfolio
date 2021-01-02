import React from 'react';
import Title from "../components/Title";
import TitleSecond from '../components/TitleSecond';
import FrontEndIcons from '../components/FrontEndIcons';

export default function Competences() {
    return (
        <div>
            <Title color='blue' text='Competences'/>
            <TitleSecond text='FRONT-END' color='blue' />
            <FrontEndIcons />
        </div>
    )
}
