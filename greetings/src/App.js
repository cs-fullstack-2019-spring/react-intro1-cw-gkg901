import React, { Component } from 'react';
import './App.css';
import SayHello from "./SayHello";
import SayHowdy from "./SayHowdy";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*2 classes called from 2 separate files*/}
        <SayHello/>
        <SayHowdy/>
      </div>
    );
  }
}

export default App;
