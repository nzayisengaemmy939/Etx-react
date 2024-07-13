import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/homepage/Home'
import Recently from './components/recently/Recently'
import Trending from './components/trending/Trending'
import Realesed from './components/realeased/Realesed'
import NewRealesed from './components/new Realesed/NewRealesed'
import Recommended from './components/Recommended/Recommended'


const App = () => {
  return (
    <div>
   
      <Navbar></Navbar>
      <Home></Home>
      <Recently></Recently>
      <Trending></Trending>
      <Realesed></Realesed>
      <NewRealesed></NewRealesed>
      <Recommended></Recommended>
    </div>
  )
}

export default App
