import React from 'react'
import Counter from './components/counter'
import Countdowntimer from './components/countdowntimer'
import Stopwatch from './components/stopWatch'
import "../src/App.css"
import Navbar from './components/Navbar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
 
    <div className='back'>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/stopwatch' element={<Stopwatch/>}/>
      <Route path='/countdown' element={<Countdowntimer/>}/>
      
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
