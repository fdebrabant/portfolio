import React from 'react';
import { Icon } from '@iconify/react';
import '../css/icons.css';
import fileTypeHtml from '@iconify/icons-vscode-icons/file-type-html';
import fileTypeCss from '@iconify/icons-vscode-icons/file-type-css';
import jsIcon from '@iconify/icons-grommet-icons/js';
import reactIcon from '@iconify/icons-logos/react';



export default function FrontEndIcons() {
    return (
        <div className='iconContainer'>
            <div className='icon'>
                <Icon 
                    className="competenceIcon"
                    icon={fileTypeHtml}          
                />
                <p className='iconText'>
                    HTML
                </p>
            </div>
           <div className='icon'>
                <Icon 
                        icon={fileTypeCss}
                        className="competenceIcon"
                />
                 <p className='iconText'>
                    CSS
                </p>
           </div>
           <div className='icon'>
                <Icon 
                    icon={jsIcon}
                    className="competenceIcon"
                />
                 <p className='iconText'>
                    JavaScript
                </p>
            </div>
            <div className='icon'>
                <Icon 
                    icon={reactIcon}
                    className="competenceIcon"
                />
                <p className='iconText'>
                    React
                </p>
            </div>           
        </div>
    )
}
