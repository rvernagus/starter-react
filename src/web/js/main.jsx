import React from 'react'
import { render } from 'react-dom'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'
import '../css/main.scss'

render(
  <div>
    <Header />
    <h1>React Dev Env!</h1>
    <Footer />
  </div>,
  document.getElementById('app')
)
