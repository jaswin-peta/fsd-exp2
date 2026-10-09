import { useState } from 'react'

function StringLiterals() {
  const [name, setName] = useState('Students')
  const message = `Hello ${name}, welcome to React!`

  return (
    <div className="live-demo string-demo">
      <label className="sr-only" htmlFor="greeting-name">Your name</label>
      <input
        className="name-input"
        id="greeting-name"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter your name"
      />
      <p className="greeting" aria-live="polite">{message}</p>
    </div>
  )
}

export default StringLiterals