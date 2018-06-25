import React from "react";

class Counter extends React.Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    return <div>
      <h1>Counter</h1>
      <p>current count: { this.state.count }</p>
      <button onClick={this.increment}>plus</button>
      <button onClick={this.decrement}>minus</button>
    </div>
  }
}

export default Counter;