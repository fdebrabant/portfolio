import React from 'react';
import '../css/bouton.css';
import PropTypes from 'prop-types';

export default function BoutonProjet(props) {
    const { link, logo, style, executed } = props



    return (
            <a href={link}
                className={style}
            >
                 <div className={logo}></div>
                <div>
                    {executed ? 'Voir le site' : 'Work in progress 🤗'}
                </div>
            </a>
    )
}

BoutonProjet.propTypes = {
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    executed: PropTypes.bool.isRequired,
};
