import React, { Component } from 'react';
import './App.css';
import Cockpit from '../components/Cockpit/Cockpit'
import Persons from '../components/Persons/Persons';

class App extends Component {

  state = 
    {persons:[
          {id: 'p1', name: 'Max', age: 28},
          {id: 'p2',name: 'Manu', age: 29},
          {id: 'p3',name: 'Stephanie', age: 26}
        ],
      otherState: 'some other value',
      showPersons: false
    };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //Get a copy of the person
    // const person = Object.assign({}, this.state.persons[personIndex]);
    const person = {
      ...this.state.persons[personIndex]
    };

    // Change the copy's name
    person.name = event.target.value;

    //Get a copy of the list of person
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //Set the state
    this.setState({persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <Persons 
          persons = {this.state.persons}
          clicked = {this.deletePersonHandler}
          changed = {this.nameChangedHandler}
          />
      );
    }

    return (
      <div className="App">
        <Cockpit
        persons={this.state.persons}
        show={this.togglePersonHandler}
        toggle={this.togglePersonHandler}
        />
        {persons}
      </div>
  )};
}

export default App;