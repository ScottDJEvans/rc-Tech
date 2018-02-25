import React, { Component } from 'react';
import './App.css';
import SearchWidget from './Widgets/SearchWidget';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1 className="App-title">rc-tc</h1>
          <SearchWidget/>
      </div>
    );
  }
}

export default App;
