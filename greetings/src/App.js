import React, { Component } from 'react';
import './App.css';
import SayHello from "./SayHello";
import SayHowdy from "./SayHowdy";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SayHello/>
        <SayHowdy/>
      </div>
    );
  }
}

export default App;
