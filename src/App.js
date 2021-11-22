import React, { Component } from "react";
import Circle from "./Circle";
import "./App.css";
import { circles } from "./circles";
import Gameover from "./Gameover";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import clickSound from "./assets/sounds/ping_pong_8bit_plop.ogg";
import backgroundMusic from "./assets/sounds/happy_adveture.mp3";
import endSound from "./assets/sounds/complete.wav"

const getRandInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};
let kierrokset = [];
let backgroundSound = new Audio(backgroundMusic);
let click = new Audio(clickSound);
let end = new Audio(endSound);

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
    click.play();
    console.log("you clicked: ", id);

    if (this.state.current !== id) {
      end.play();
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
    backgroundSound.play();
    this.nextCircle();
    this.setState({
      gameOn: true,
      gameOff: false,
    })
  }

  stopHandler = () => {
    backgroundSound.pause();
    click.pause();
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
          <p><FontAwesomeIcon icon={faBug} />   Catch the bugs  <FontAwesomeIcon icon={faBug} /></p>
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
