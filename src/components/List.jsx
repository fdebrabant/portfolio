import React from 'react';
import PropTypes from 'prop-types';
import '../css/list.css'

export default function List(props) {
    const { list, size } = props;
    return (
        <div className={`list' + ${(size==='large' ? 'limain': '')}`}>
            <ul>
                {
                    list.map((text, i) => <li key={i}>{text}</li>)
                }
            </ul>   
        </div>        
    )
}

List.propTypes = {
    list: PropTypes.array.isRequired,
    size: PropTypes.string,
};

