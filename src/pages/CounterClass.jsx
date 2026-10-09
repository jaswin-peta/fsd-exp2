import { Component } from 'react'

class CounterClass extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  updateCount = (change) => {
    this.setState((previousState) => ({ count: previousState.count + change }))
  }

  resetCount = () => {
    this.setState({ count: 0 })
  }

  render() {
    return (
      <div className="live-demo">
        <button type="button" className="demo-button secondary" onClick={() => this.updateCount(-1)} aria-label="Decrease class counter">
          -1
        </button>
        <span className="count-value" aria-live="polite">{this.state.count}</span>
        <button type="button" className="demo-button" onClick={() => this.updateCount(1)} aria-label="Increase class counter">
          +1
        </button>
        <button type="button" className="demo-button secondary" onClick={this.resetCount}>
          Reset
        </button>
      </div>
    )
  }
}

export default CounterClass