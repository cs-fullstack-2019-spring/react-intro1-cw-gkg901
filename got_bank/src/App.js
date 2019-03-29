import React, { Component } from 'react';
import './App.css';
import BankAccount from "./BankAccount";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*NAME AND BALANCE PASSED IN TO BANKACCOUNT CLASS*/}
        <BankAccount name='Kevin The Great' balance='0.69'/>

      </div>
    );
  }
}

export default App;
