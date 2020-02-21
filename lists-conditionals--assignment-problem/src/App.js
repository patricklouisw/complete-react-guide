import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComp from './CharComp/CharComp';

class App extends Component {

  state = {
    lengthWords: 0,
    word: []
  }

  wordHandler = (event) => {

    const arr_word_copy = event.target.value.split('');

    this.setState(
      {
        lengthWords: event.target.value.length,
        word: arr_word_copy
      }
    )
  }

  deleteCharHandler = (charIndex) => {
    const newLength = this.state.lengthWords - 1;
    const word_copy = [...this.state.word];
    word_copy.splice(charIndex, 1);
    
    this.setState(
      {
        lengthWords: newLength,
        word: word_copy
      }
    )
  }

  render() {

    let charWords = null;

    charWords = (
      <div className='charWord'>
        {this.state.word.map((char, index) => {
          return (
            <CharComp char={char} key={index} delete={() => this.deleteCharHandler(index)} />
          )
        })}
      </div>
    )

    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        
        <div className='validation'>
          <input type="text" placeholder="Type words" onChange={this.wordHandler} value={this.state.word.join("")} /><ValidationComponent length={this.state.lengthWords} />
          <p>{this.state.lengthWords}</p>
        </div>
        {charWords}
      </div>
    );
  }
}

export default App;
