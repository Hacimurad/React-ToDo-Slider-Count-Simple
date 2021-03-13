import React, { Component } from "react";
import "./App.css";
import ImageSlider from "./components/Slider";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList"

class App extends Component {
  state = {
    visible: true,
    whichComponentToShow: "ImageSlider"
  };

  render() {
    if (this.state.whichComponentToShow === "ImageSlider") {
      return (
        <div className="App">
          <ImageSlider />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "Counter" });
            }}
          >
            show counter
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "Counter") {
      return (
        <div className="App">
          <Counter />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "TodoList" });
            }}
          >
            show TodoList
          </button>
        </div>
      );
    } else if (this.state.whichComponentToShow === "TodoList") {
      return (
        <div className="App">
          <TodoList />
          <button
            onClick={() => {
              this.setState({ whichComponentToShow: "ImageSlider" });
            }}
          >
            show ImageSlider
          </button>
        </div>
      );
    }


    return null;
  }
}

export default App;