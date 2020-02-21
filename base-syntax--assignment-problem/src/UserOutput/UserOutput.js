import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='userOutput'>
            <p className='usernameText'>This is your username:</p>
            <p className='username'>Username is {props.username}.</p>
        </div>
    );
}

export default userOutput;