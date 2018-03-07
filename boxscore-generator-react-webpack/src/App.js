import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import BoxscoreGenerator from './components/BoxscoreGenerator';
import './App.css';

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

ReactDOM.render(<App />, document.getElementById('app'));
