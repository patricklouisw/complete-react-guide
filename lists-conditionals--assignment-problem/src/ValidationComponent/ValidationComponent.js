import React from 'react';
import './ValidationComponent.css'

const MIN_NUM = 5;
const MAX_NUM = 10;

const validationComponent = (props) => {
    
    let err_message = null;

    if (props.length < MIN_NUM) {
        err_message = (
            <p className="err_short">Text is too short!</p>
        );
    } else if (props.length > MAX_NUM) {
        err_message = (
            <p className="err_long">Text is too long!</p>
        );
    } else {
        err_message = (
            <p className="no_err">Length of Text is valid!</p>
        );
    }
    
    return (
        <div className="validation">
            {err_message}
        </div>
    )
}

export default validationComponent;