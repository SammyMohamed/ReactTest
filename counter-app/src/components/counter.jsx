import React, { Component } from "react";

class Counter extends Component {
  /*renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>; //or return null, to show nothing
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }*/

  componentDidUpdate(prevProps, prevState) {
    // We can check here whether specific fields in props or state were changed and react to them
    // Maybe get new data from the server using an ajax call
  }

  componentWillUnmount() {
    //Called just before a component is removed from the DOM
    //Cleanup here - timers, listeners, avoid memory leaks
  }

  render() {
    const { counter, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses(counter)}>
            {this.formatValue(counter)}
          </span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className={`btn btn-secondary btn-sm m-2 ${
              counter.value > 0 ? "" : "disabled"
            }`}
          >
            -
          </button>
          <button
            onClick={() => onDelete(counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            x
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses(counter) {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue(counter) {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
