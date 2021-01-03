import React from 'react';
import { Icon } from '@iconify/react';
import '../css/icons.css';
import figmaIcon from '@iconify/icons-grommet-icons/figma';
import githubIcon from '@iconify/icons-bytesize/github';
import fileTypeVscode from '@iconify/icons-vscode-icons/file-type-vscode';
import eslintIcon from '@iconify/icons-logos/eslint';



export default function OutillageIcons() {
    return (
        <div className='iconContainer'>
            <div className='icon'>
                <Icon 
                    className="competenceIcon"
                    icon={figmaIcon}          
                />
                <div className='iconText'>
                    Figma
                </div>
            </div>
           <div className='icon'>
                <Icon 
                    icon={githubIcon}
                    className="competenceIcon"
                />
                 <div className='iconText'>
                    GitHub
                </div>
           </div>
           <div className='icon'>
                <Icon 
                    icon={fileTypeVscode}
                    className="competenceIcon"
                />
                 <div className='iconText'>
                    VSCode
                </div>
            </div>
            <div className='icon'>
                <Icon 
                    icon={eslintIcon}
                    className="competenceIcon"
                />
                <div className='iconText'>
                    ESlint
                </div>
            </div>           
        </div>
    )
}
