import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <div className="not-found">
        <h2>Sorry</h2>
        <p>That page can not be found</p>
        <Link to="/">Back to Homepage..</Link>
      </div>
    </div>
  )
}
