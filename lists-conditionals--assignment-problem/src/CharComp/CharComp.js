import React from 'react';
import './CharComp.css';

const charComp = (props) => {

    let c = props.char;
    console.log(props.char);
    if (c = ''){c = '_'};

    return (
        <div className='char' onClick={props.delete}>
            <p>{props.char}</p>
        </div>
    );
}

export default charComp;