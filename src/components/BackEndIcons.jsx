import React from 'react';
import { Icon } from '@iconify/react';
import '../css/icons.css';
import nodejsIcon from '@iconify/icons-logos/nodejs';
import expressIcon from '@iconify/icons-logos/express';
import mysqlIcon from '@iconify/icons-logos/mysql';



export default function BackEndIcons() {
    return (
        <div className='iconContainer'>
            <div className='icon'>
                <Icon 
                    className="competenceIcon"
                    icon={nodejsIcon}          
                />
            </div>
           <div className='icon'>
                <Icon 
                    icon={expressIcon}
                    className="competenceIcon"
                />
           </div>
           <div className='icon'>
                <Icon 
                    icon={mysqlIcon}
                    className="competenceIcon"
                />
                <div className='iconText'>
                    MySQL
                </div>
            </div>           
        </div>
    )
}