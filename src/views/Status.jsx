import React from 'react';
import TitleSecond from '../components/TitleSecond';
import Text from '../components/Text';

export default function Status() {
    return (
        <div>
            <TitleSecond text='En recherche de stage' size='secondTitle' />
            <Text 
                text='Forte d’une expérience passée dans 
                la sphère de l’expérimentation agricole, 
                je suis aujourd’hui en reconversion dans 
                le Web developpement.'
            />
        </div>
    )
}
