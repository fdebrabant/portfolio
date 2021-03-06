import React from 'react';
import Title from "../components/Title";
import TitleSecond from '../components/TitleSecond';
import Text from '../components/Text';
import List from '../components/List';
import expeList from '../components/data/expe_btsa';

export default function Experiences() {
    return (
        <div id="experiences">
            <Title color='blue' text='Experiences professionnelles'/>
            <TitleSecond 
                text='Cheffe de culture et expérimentation agricole' 
                size='secondTitle' 
            />
            <Text text='2016-2020'/>
            <Text 
                text='Divers entreprises tel que:
                Agricool (93) ou la Ferme de la Chebuette (44)'
            />
            <List list={expeList.btsa} size='large'/>
            
        </div>
    )
}
