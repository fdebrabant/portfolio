import React from 'react';
import '../css/text.css';
import PropTypes from 'prop-types';

export default function Text(props) {
    const { text } = props;
    return (
        <div>
            <p>
                {text}
            </p>
        </div>
    )
}

Text.propTypes = {
    text: PropTypes.string
};
