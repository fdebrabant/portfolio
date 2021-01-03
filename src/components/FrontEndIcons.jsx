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
                <div className='iconText'>
                    HTML
                </div>
            </div>
           <div className='icon'>
                <Icon 
                    icon={fileTypeCss}
                    className="competenceIcon"
                />
                 <div className='iconText'>
                    CSS
                </div>
           </div>
           <div className='icon'>
                <Icon 
                    icon={jsIcon}
                    className="competenceIcon"
                />
                 <div className='iconText'>
                    JavaScript
                </div>
            </div>
            <div className='icon'>
                <Icon 
                    icon={reactIcon}
                    className="competenceIcon"
                />
                <div className='iconText'>
                    React
                </div>
            </div>           
        </div>
    )
}
