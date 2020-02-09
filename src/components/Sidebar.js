import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/mybooks">My Books</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
