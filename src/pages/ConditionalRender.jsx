import { useState } from 'react'

function ConditionalRender() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  return (
    <div className="live-demo">
      <span className="status-text" aria-live="polite">
        {isLoggedIn ? 'Welcome Admin' : 'Please login'}
      </span>
      <button
        type="button"
        className="demo-button"
        onClick={() => setIsLoggedIn((loggedIn) => !loggedIn)}
      >
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  )
}

export default ConditionalRender