import React from 'react';
import Banner from '../components/Banner';
import Profil from '../components/Profil';
import Title from '../components/Title';

export default function Header() {
    return (
        <div>
            <Banner />
            <Profil />
            <Title text='Fanny Debrabant' color='green' />
            <Title text='Développeuse Web Junior' color='green' outline='hidden'/>
        </div>
    )
}
