import { useState } from 'react'

function ButtonClickHandler() {
  const [status, setStatus] = useState('Waiting for click...')
  const [clickCount, setClickCount] = useState(0)

  const handleClick = () => {
    const nextCount = clickCount + 1
    setClickCount(nextCount)
    setStatus(`Button clicked ${nextCount} ${nextCount === 1 ? 'time' : 'times'}.`)
  }

  return (
    <div className="live-demo">
      <button type="button" className="demo-button" onClick={handleClick}>
        Click Me
      </button>
      <span className="status-text" aria-live="polite">{status}</span>
      {clickCount > 0 && (
        <button
          type="button"
          className="demo-button secondary"
          onClick={() => {
            setClickCount(0)
            setStatus('Waiting for click...')
          }}
        >
          Reset
        </button>
      )}
    </div>
  )
}

export default ButtonClickHandler