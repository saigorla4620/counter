import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement, Reset } from '../actions/counteractions'
import { Link } from 'react-router-dom'

const Counter = () => {
  const Counter = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  return (
    <>
      <div className='d-flex justify-content-center'>
        <div className='footer btn-group '>
          <Link to="/"><button className='btn'><span className='bi bi-house-door-fill'></span></button></Link>
          <Link to="/counter"> <button className='btn'><span className="bi bi-0-circle-fill"></span></button></Link>
          <Link to="/stopwatch"><button className='btn'><i className="bi bi-stopwatch-fill"></i></button></Link>
          <Link to="/countdown"><button className='btn'><i className="bi bi-alarm-fill"></i></button></Link>
          <Link to="#"><button className='bi bi-person-fill btn'></button></Link>

        </div>
      </div>

      <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>

        <div className='card-counter d-flex justify-content-center align-items-center'>
          <div className='inner-card'>
            <div className='mt-5'>
              <h2 className='text-center text-white'>{Counter}</h2>
              <div className='mt-3' style={{ marginLeft: "120px" }}>
                <button className="button me-2" onClick={() => dispatch(Decrement())} >-</button>
                <button className="button ms-2" onClick={() => dispatch(Reset())}  ><i className="bi bi-arrow-clockwise"></i></button>
                <button className="button ms-3" onClick={() => dispatch(Increment())} >+</button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default Counter
