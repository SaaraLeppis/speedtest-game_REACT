import React, { Component } from "react";
import Circle from "./Circle";
import "./App.css";
import { circles } from "./circles";
import Gameover from "./Gameover";

const getRandInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

class App extends Component {
  //it doesnt have to be state, can e separated js file
  // we can remove 4 times <Circle/> 
  state = {
    score: 0,
    current: 0,
    gameover: false,
    pace: 1500,
    rounds: 0,
    gameOn: false,
    gameOff: true,
  };
  timer = undefined;

  clickHandler = (id) => {
    console.log("you clicked: ", id);
    if (this.state.current !== id) {
      this.stopHandler();
      return;
    }
    this.setState({
      score: this.state.score + 10,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }
    let nextActive;
    do {
      nextActive = getRandInteger(1, 4)
    }
    while (nextActive === this.state.current);
    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
    console.log("active circle is ", this.state.current);
    console.log("active round is ", this.state.rounds);
  }

  startHandler = () => {
    this.nextCircle();
    this.setState({
      gameOn: true,
      gameOff: false,
    })
  }

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      gameover: true,
      current: 0,
      gameOn: false,
      gameOff: true,
    })
  }

  closeHandler = () => {
    this.setState({
      gameover: false,
      score: 0,
      pace: 1500,
      rounds: 0,
    })
  }

  render() {
    return (
      <div>
        {this.state.gameover && <Gameover score={this.state.score} close={this.closeHandler} />}
        <div className="text">
          <h1>Speed Game</h1>
          <p> Your score: {this.state.score}</p>
        </div>
        <div className="circles">
          {circles.map((c) => (
            <Circle
              key={c.id} color={c.color} id={c.id}
              click={() => this.clickHandler(c.id)}
              active={this.state.current === c.id} />
          ))}
        </div>
        <button disabled={this.state.gameOn} onClick={this.startHandler}>START</button>
        <button disabled={this.state.gameOff} onClick={this.stopHandler}>STOP</button>
      </div>
    );
  }
}

export default App;
