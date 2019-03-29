import React, {Component} from 'react';

//CLASS WITH TWO PROPERTIES
class BankAccount extends Component {
    render(){
        return(
            <div className='Account'>
                <h2>Welcome {this.props.name}!!</h2>
                <h3>Your account balance is ${this.props.balance}!!</h3>


            </div>
        )

    }
}



export default BankAccount;