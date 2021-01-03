import React from 'react';
import Title from "../components/Title";
import TitleSecond from '../components/TitleSecond';
import '../css/blockProjet.css';
import PlayerWildIcons from '../components/PlayerWildIcons';
import FrontEndIcons from '../components/FrontEndIcons';
import BackEndIcons from '../components/BackEndIcons';
import List from '../components/List';
import projectList from '../components/data/project_list';
import BoutonProjet from '../components/BoutonProjet';

export default function Projets() {

    console.log(projectList);

    return (
        <div>
            <Title color='blue' text='Projets'/>
            <div>
                <TitleSecond text='PLAYER-WILD' size='secondTitle' />
                <PlayerWildIcons />
                <div className='blockProjet'>
                    <List list={projectList.player_wild}/>
                    <BoutonProjet 
                        link='https://maxime-monjal.github.io/Player-wild/'
                        logo='logoPlayerWild'
                        style='buttonPW'
                    />
                </div>
            </div>
            <div>
                <TitleSecond text='VEGENANTES GO!' size='secondTitle' />
                <FrontEndIcons />
                <div className='blockProjet'>
                    <List list={projectList.vegenantes_go}/>
                    <BoutonProjet 
                        link='https://vegenantesgo.netlify.app/'
                        logo='logoVegenantes'
                        style='buttonVN'
                    />
                </div>
            </div>
            <div>
                <TitleSecond text='PYLOT' size='secondTitle' />
                <FrontEndIcons />
                <BackEndIcons />
                <div className='blockProjet'>
                    <List list={projectList.pylot}/>
                    <BoutonProjet 
                        logo='logoPylot'
                        style='buttonP'
                    />
                </div>
            </div>
            
        </div>
    )
}
