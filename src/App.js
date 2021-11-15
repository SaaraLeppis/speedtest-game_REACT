import React, { Component } from "react";
import Circle from "./Circle";
import "./App.css";
import { circles } from "./circles";

class App extends Component {
  //it doesnt have to be state, can e separated js file
  // we can remove 4 times <Circle/> 
  state = {
    score: 0,
  };

  clickHandler = () => {
    this.setState({
      score: this.state.score + 10,
    });
  };

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
        <button>START</button>
        <button>STOP</button>
      </div>
    );
  }
}

export default App;
