import React from 'react';
import Title from "../components/Title";
import TitleSecond from '../components/TitleSecond';
import FrontEndIcons from '../components/FrontEndIcons';
import BackEndIcons from '../components/BackEndIcons';
import OutillageIcons from '../components/OutillageIcons';
import Text from '../components/Text';

export default function Competences() {
    return (
        <div>
            <Title color='blue' text='Competences'/>
           <div>
                <TitleSecond text='FRONT-END' size='secondTitle' />
                <FrontEndIcons />
                <Text text='Créer des sites responsives, évolutifs et ergonomiques.' />
           </div>
           <div>
                <TitleSecond text='BACK-END' size='secondTitle' />
                <BackEndIcons />
                <Text text='Créer / utiliser une API. Manipuler une base de donnée.' />
           </div>
           <div>
                <TitleSecond text='OUTILLAGE' size='secondTitle' />
                <OutillageIcons />
                <Text text='Créer des maquettes de sites interactives.' />
                <Text text='Coder de manière lisible, propre et organisée.'/>
                <Text text='Travailler sur des branches et faire des pull Request.'/>
           </div>
        </div>
    )
}
