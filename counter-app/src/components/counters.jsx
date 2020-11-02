import React, { Component } from "react";
import Counter from "./counter";
/**
 * Lifecycle Hooks
 *
 * Mount - constructor, render, componentDidMount
 * Update - render, componentDidUpdate
 * Unmount - componentWillUnmount
 *
 * There are a few others as well, these are most commonly used
 *
 * Not present in stateless functional components, such as this one
 */

class Counters extends Component {
  render() {
    const {
      counters,
      onReset,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm my-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            counter={counter}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
