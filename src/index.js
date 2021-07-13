import React from "react";
import ReactDOM from "react-dom";

import "./ball.css";

const inputStyle = {
  width: 235,
  margin: 5
};

class Magic8Ball extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      randomIndex: ""
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {                                                                         
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ""
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      "If James will dance and it's a yes!",
      "I don't think so",
      "Sure, Why not!",
      "Kick Aaron and you will know the answer",
      "You may rely on it",
      "Margo says could be YES!",
      "Doing Good",
      "Si",
      "My psychic says YES",
      "James says Talk to my hand",
      "James says Try Again",
      "SECRET",
      "Ask Mike",
      "HOCUS FOCUS and ask again",
      "Don't count on it",
      "Venkata says NO",
      "Brandon says adios",
      "Most likely",
      "Definitely NO",
      "I don't think so!"
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <div onClick={this.ask}>
		  <h2 className={"mainTitle"}>Welcome to Magic 8 Ball </h2>
          <div className={"titleText"}>QUESTION?</div>
		  <br />
          <input
            type="text" id='question' name='question' value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}/>
          <br /><br /><br />
          <div className={"eightBall"}>
            <div className={"whiteCircle"}>
              <div className={"topEight"} />
              <div className={"bottomEight"} />
            </div>
          </div>
        </div>
        <br />
        <h1 className={"eightBallSays"}>{answer}</h1>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Magic8Ball />, rootElement);