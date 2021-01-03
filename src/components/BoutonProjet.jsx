import React from 'react';
import '../css/bouton.css';
import PropTypes from 'prop-types';

export default function BoutonProjet(props) {
    const { link, logo, style} = props



    return (
            <a href={link}
                className={style}
            >
                 <div className={logo}></div>
                <div>
                    Voir le site
                </div>
            </a>
    )
}

BoutonProjet.propTypes = {
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
};
