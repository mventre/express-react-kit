import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      mainData: []
    };
  }
  componentDidMount() {
    fetch('/api/testJSON')
      .then(res => res.json())
      .then(mainData => this.setState({mainData}));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>JSON Data</p>
        {this.state.mainData.map(data =>
            <li>{data.info}</li>
        )}
      </div>
    );
  }
}

export default App;
