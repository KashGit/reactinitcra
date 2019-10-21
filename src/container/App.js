import React, { Component } from 'react';
import Classes from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.inputAmountRef = React.createRef();
  }

  state = {
    balance: 40000,
    denominations: [2000, 500, 100],
    withdrawAmount: 0
  }

  withdrawHandler = () => {
    const withdrawAmount = Number(this.state.withdrawAmount);
    if (!isNaN(withdrawAmount) && withdrawAmount % 100 === 0 && withdrawAmount !== 0 && withdrawAmount < this.state.balance) {
      let withdrawAmount = Number(this.state.withdrawAmount);
      console.log("You can withdraw");
      const den2k = Math.floor(withdrawAmount / 2000);

      console.log(den2k);
      console.log((withdrawAmount - (den2k * 2000)) / 500);

      const den5h = Math.floor((withdrawAmount - (den2k * 2000) )/ 500);
      const den1h = Math.floor((withdrawAmount - (den2k * 2000 + den5h * 500)) / 100);
      let notes = [];
      notes.push(den2k);
      notes.push(den5h);
      notes.push(den1h);

      console.log(notes);

    }
    else {
      console.log("invalid amount");
    }

  }

  changeInput = event => this.setState({ ...this.state, withdrawAmount: event.target.value });

  render() {
    return (
      <React.Fragment>
        <div className={Classes.center}>
          <h1>
            Your Balance is {this.state.balance}
          </h1>
        </div>
        <div className={Classes.container}>
          <div className={Classes.center}>
            <input type="text" ref={this.inputAmountRef} placeholder="Enter Amount to Withdraw" onChange={this.changeInput}></input>
          </div>

        </div>
        <div className={Classes.center}>
          <div className={Classes.btn} onClick={this.withdrawHandler}>Withdraw Money</div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
