import React, {useEffect, useReducer} from 'react';

import classes from './Cockpit.css';

const cockpit =(props) => {

  //useEffect(f, s)
  // arg f: the function to run in this functional component when Cockpit is executed
  // arg s: the depencies of this function (f will only run when the things in the list of depencies changes). Example: [] => only run the first time it renders. [props.persons] => only runs when persons changes. 


  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Can call Http request...
    setTimeout(() => {alert("Saved data to cloud!");}, 1000);
    //It runs BEFORE the main useEffect function runs, BUT
    //After the (first) render cycle
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignedClasses = [];
  let btnClass = '';

  if(props.showPersons) {
      btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
      <div className={classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button className={btnClass} onClick={props.clicked}>
          Toggle Persons
          </button>
      </div>
  );
}

export default React.memo(cockpit);