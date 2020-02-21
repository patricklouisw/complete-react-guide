import React from 'react'
import './UserInput.css';

const userInput = (props) => {
    return(
        <div className='userInput'>
            <input type="text" placeholder="Type username" onChange={props.changed} value={this.newUsername}/>
            <button onClick={props.update}>Change Username</button>
        </div>
    )
    
}

export default userInput;