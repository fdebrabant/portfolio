import React from 'react';
import PropTypes from 'prop-types';
import '../css/list.css'

export default function List(props) {
    const { list } = props;
    return (
        <div className='list'>
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
};

