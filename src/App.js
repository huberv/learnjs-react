import React, { Component } from 'react';
import './App.css';
import Hero from './images/HeroImage.jpg';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="row">
            <div className="one-half column">
              <h3>Learn JavaScript, one puzzle at a time.</h3>
              <a href="" className="button button-primary">Start Now!</a>
            </div>
            <div className="one-half column">
              <img src={Hero} alt="Cube"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
