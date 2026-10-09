import { useState } from 'react'

function FunctionalCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="live-demo">
      <button type="button" className="demo-button secondary" onClick={() => setCount((value) => value - 1)} aria-label="Decrease functional counter">
        -1
      </button>
      <span className="count-value" aria-live="polite">{count}</span>
      <button type="button" className="demo-button" onClick={() => setCount((value) => value + 1)} aria-label="Increase functional counter">
        +1
      </button>
      <button type="button" className="demo-button secondary" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default FunctionalCounter