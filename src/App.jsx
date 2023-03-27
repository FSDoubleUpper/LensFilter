import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Display from './components/Display'
import Ads from './components/Ads'
import Footer from './components/Footer'
import { lensData } from '../public/data/data'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Display />
      <Ads />
      <Footer />
    </div>
  )
}

export default App