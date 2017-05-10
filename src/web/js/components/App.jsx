import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </div>
  </BrowserRouter>
)

export default App
