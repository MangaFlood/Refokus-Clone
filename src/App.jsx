import React from 'react'



//  Importing Components
import NavBar from './components/NavBar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'



function App() {
  return (
    <div className='w-full bg-zinc-900 font-["Main"]'>
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
    </div>
  )
}

export default App
