import React, { Component } from 'react';
import BoxscoreGenerator from './components/BoxscoreGenerator';
import './assets/App.css';

class App extends Component {
  render() {
    return (
      <section className="section">
        <BoxscoreGenerator />
      </section>
    );
  }
}

export default App;
