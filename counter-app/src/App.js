import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 2 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    //You can set state here (eg from props), but must do so manually rather than use setState
  }

  componentDidMount() {
    //Ajax calls to get data from the server, for instance
    //Can now call setState with that data
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];

    //Don't modify counters[i] for any i directly! This changes state directly, no-no in React.
    const index = counters.indexOf(counter);
    counters[index].value++;

    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];

    //Don't modify counters[i] for any i directly! This changes state directly, no-no in React.
    const index = counters.indexOf(counter);

    if (counters[index].value === 0) return;

    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(counter => counter.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

/**
 * Exercise - Decrement Button
 * Button lowers the count, down to zero.
 * Button is greyed out on zero.
 * Use +, -, x signs instead of words on the counter buttons
 * Use bootstrap grid to align things neatly
 * +, -, x buttons are in one column of the grid together
 */
