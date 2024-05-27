import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<>
<div className='d-flex justify-content-evenly bg-info' style={{height:"60vh"}}>
  <div className="card-home text-center mt-5">
  <p className="heading">Counter <i className='bi bi-0-circle-fill'></i></p>
  <p classNameName="para">To See the Counter Hover me and Click Button</p>
  <div className="overlay"></div>
  <Link to="/counter"><button className="card-btn">Click</button></Link>
</div>
<div className="card-home text-center mt-5">
  <p className="heading">Stop Watch <i className="bi bi-stopwatch-fill"></i></p>
  <p classNameName="para ">To See the Stop Watch Hover me and Click Button</p>
  <div className="overlay"></div>
  <Link to="/stopwatch"><button className="card-btn">Click</button></Link>
</div>
<div className="card-home mt-5 text-center">
  <p className="heading">Countdown <i class="bi bi-alarm-fill"></i></p>
  <p classNameName="para">To See the CountDown Hover me and Click Button</p>
  <div className="overlay"></div>
  <Link to="/countdown"><button class="card-btn">Click</button></Link>
</div>
</div>
<div className='footer btn-group '>
 <Link to="/"><button className='btn'><span className='bi bi-house-door-fill'></span></button></Link> 
 <Link to="/counter"> <button className='btn'><span className="bi bi-0-circle-fill"></span></button></Link>
  <Link to="/stopwatch"><button className='btn'><i className="bi bi-stopwatch-fill"></i></button></Link>  
  <Link to="/countdown"><button className='btn'><i className="bi bi-alarm-fill"></i></button></Link> 
  <Link to="#"><button className='bi bi-person-fill btn'></button></Link>

</div>
</>
  )
}

export default Navbar
