import React from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './components/homepage/Home'
import Recently from './components/recently/Recently'
import Trending from './components/trending/Trending'
import Realesed from './components/realeased/Realesed'
import NewRealesed from './components/new Realesed/NewRealesed'
import Recommended from './components/Recommended/Recommended'


const App = () => {
  const film=[{name:"Medelin",action:"action",style:"comedy"},
    {name:"Fast X",action:"action",type:"Crime",style:"Thriller"},
    {name:"The Black...",action:"Horror",style:"Thriller"}
  ]
  const series=[
      {name:"Ghosted"},{name:"Black Night"},
    {name:"Drops of God"},
    {name:"The Night Agent"}]
    const real=
      [
        {name:"silo"},{name:"John Wick:ch..."},
      {name:"Guardian of The"},
      {name:"The Conven..."}]
      const recommend=
      [
        {name:"Robots"},{name:"Love again"},
      {name:"Hypnoptic"},
      {name:"paint"},
      {name:"Book Club"},
      {name:"The Mother"},
      {name:"Jannuary 6th"},
      {name:"Sisu"},


    ]
  return (
   
    <div>
   
      <Navbar></Navbar>
      <Home></Home>
      <Recently></Recently>
      <Trending film={film}></Trending>
      <Realesed real={real}></Realesed>
      <NewRealesed series={series}></NewRealesed>
      <Recommended recommend={recommend}></Recommended>
    </div>
  )
}

export default App
