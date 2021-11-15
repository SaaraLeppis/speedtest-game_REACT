import React, { Component } from "react";
import Circle from "./Circle";
import "./App.css";
import { circles } from "./circles";

const getRandInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

class App extends Component {
  //it doesnt have to be state, can e separated js file
  // we can remove 4 times <Circle/> 
  state = {
    score: 0,
    current: 0,
  };
  timer = undefined;
  pace = 1500;

  clickHandler = () => {
    this.setState({
      score: this.state.score + 10,
    });
  };

  nextCircle = () => {
    let nextActive;
    do {
      nextActive = getRandInteger(1, 4)
    }
    while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });
    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);
    console.log("active crcle is ", this.state.current);
  }

  startHandler = () => {
    this.nextCircle();

  }
  stopHandler = () => {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <div>
        <div>
          <h1>Speed Game</h1>
          <p> Your score: {this.state.score}</p>
        </div>
        <div className="circles">
          {circles.map((c) => (
            <Circle key={c.id} color={c.color} id={c.id} click={this.clickHandler} />
          ))}
        </div>
        <button onClick={this.startHandler}>START</button>
        <button onClick={this.stopHandler}>STOP</button>
      </div>
    );
  }
}

export default App;
