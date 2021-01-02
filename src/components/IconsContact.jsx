import React from 'react';
import { Icon } from '@iconify/react';
import bxlLinkedinSquare from '@iconify/icons-bx/bxl-linkedin-square';
import mailOpened from '@iconify/icons-tabler/mail-opened';
import baselinePhoneAndroid from '@iconify/icons-ic/baseline-phone-android';
import githubIcon from '@iconify/icons-bytesize/github';
import '../css/icons.css';

export default function IconsContact() {
    return (
        <div className='iconContainer'>
            <div className='icon'>
                <Icon 
                    className="socialLink" 
                    icon={mailOpened} 
                />
                <p className='iconText'>
                    debrabant.fanny@gmail.com
                </p>
            </div>
            <div className='icon'>
                <Icon
                    className="socialLink"  
                    icon={baselinePhoneAndroid} 
                 />
                <p className='iconText'>
                    06.64.24.67.34 
                </p>
            </div>
            <div className='icon'>
                <a href="https://www.linkedin.com/in/fanny-debrabant/">
                    <Icon 
                        className="socialLink" 
                        icon={bxlLinkedinSquare} 
                    />
                </a>
            </div>
            <div className='icon'>
                <a href="https://github.com/fdebrabant">
                    <Icon
                        className="socialLink" 
                        icon={githubIcon} 
                    />
                </a>
            </div>
        </div>
    )
}
