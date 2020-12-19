import React, { Component } from "react";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHead: 0,
      nTails: 0,
    };
    this.handleCLick = this.handleCLick.bind(this)
  }
  flipCoin() {
      
  }
  handleCLick(e) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Lets flip Dat Coin</h2>
        <button onClick={this.handleCLick}>Flip Me!</button>
        <p>
          Out of {this.state.nFlips} flips, there have been
          {this.state.nHead} heads and {this.state.nTails} tails
        </p>
      </div>
    );
  }
}

export default CoinContainer;
