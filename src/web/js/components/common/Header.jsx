import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => (
  <div>
    <h3>Header</h3>
    <p><NavLink to="/" exact={true}>Home</NavLink></p>
    <p><NavLink to="/about">About</NavLink></p>
  </div>
)
