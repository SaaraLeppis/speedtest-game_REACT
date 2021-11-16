import React, { Component } from "react";
import Circle from "./Circle";
import "./App.css";
import { circles } from "./circles";
import Popup from "./Popup";

const getRandInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
};

class App extends Component {
  //it doesnt have to be state, can e separated js file
  // we can remove 4 times <Circle/> 
  state = {
    score: 0,
    current: 0,
    showpopup: false,
    pace: 1500,
  };
  timer = undefined;

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
      pace: this.state.pace * 0.95,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
    //console.log("active crcle is ", this.state.current);
  }

  startHandler = () => {
    this.nextCircle();
  }

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showpopup: true,
      current: 0,
    })
  }
  closeHandler = () => {
    this.setState({
      showpopup: false,
      score: 0,
      pace: 1500,
    })
  }

  render() {
    return (
      <div>
        {this.state.showpopup && <Popup score={this.state.score} close={this.closeHandler} />}
        <div className="text">
          <h1>Speed Game</h1>
          <p> Your score: {this.state.score}</p>
        </div>
        <div className="circles">
          {circles.map((c) => (
            <Circle
              key={c.id} color={c.color} id={c.id}
              click={this.clickHandler}
              active={this.state.current === c.id} />
          ))}
        </div>
        <button onClick={this.startHandler}>START</button>
        <button onClick={this.stopHandler}>STOP</button>
      </div>
    );
  }
}

export default App;
