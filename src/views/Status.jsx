import React from 'react';
import TitleSecond from '../components/TitleSecond';
import Text from '../components/Text';

export default function Status() {
    return (
        <div>
            <TitleSecond text='En recherche de stage du 15 fevrier au 15 juin 2021' size='secondTitle' />
            <Text 
                text='Forte d’une experience passée dans 
                la sphère de l’experiementation agricole, 
                je suis aujourd’hui en reconversion dans 
                le Web developpement.'
            />
        </div>
    )
}
