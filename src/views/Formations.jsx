import React from 'react';
import Title from "../components/Title";
import TitleSecond from '../components/TitleSecond';
import Text from '../components/Text';
import LogoWCS from '../components/LogoWCS';
import LogoBTS from '../components/LogoBTS';

export default function Formations() {
    return (
        <div id="formations">
            <Title color='blue' text='Formation'/>
            <TitleSecond 
                text='DEVELOPPEUR WEB' 
                size='secondTitle' 
            />
            <Text text='sept 2020-fev 2021'/>
            <LogoWCS/>
            <Text 
                text='Formation de developpeur 
                web intensive de 5 mois.
                Formation basée sur la réalisation de projets en groupe, 
                menés en methode agile en utilisant
                un environnement FullStack. '
            />
            <TitleSecond 
                text='BTSA PRODUCTION HORTICOLE' 
                size='secondTitle' 
            />
            <Text text='2013-2015'/>
            <LogoBTS/>
            <Text 
                text='Formation préparant au métier de chef 
                de culture (management déquipe , connaissances
                végétales)' 
            />
        </div>
    )
}