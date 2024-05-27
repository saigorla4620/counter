import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startCountTimer, stopCountTimer, resetCountTimer, tickTimer, setupTimer } from '../actions/countDowntimeractions'

const CountdownTimer = () => {
    const dispatch = useDispatch()
    const { remainingTime, isRunning } = useSelector(state => state.countTimer)

    // useState for setting the data 
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [min, setMin] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isTimeSet, setIsTimeSet] = useState(false) // to hide the setter time options

    // useEffect for handling the timer
    useEffect(() => {
        let intervalId;
        if (isRunning) {
            intervalId = setInterval(() => {
                dispatch(tickTimer())
            }, 1000);
        }
        // cleanup
        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }

    }, [isRunning, dispatch])

    // HandleSubmit functionality
    const handleSubmit = () => {
        const totalSeconds = (days * 86400) + (hours * 3600) + (min * 60) + seconds
        dispatch(setupTimer(totalSeconds))
        setIsTimeSet(true)
    }

    const formattedTime = () => {
        if (isNaN(remainingTime)) {
            return '0 Days : 00 Hours : 00 Min : 00 Sec'
        }

        let displayDays = Math.floor(remainingTime / (60 * 60 * 24))
        let displayHours = Math.floor((remainingTime % (60 * 60 * 24)) / (60 * 60))
        let displayMin = Math.floor((remainingTime % (60 * 60)) / 60)
        let displaySec = Math.floor(remainingTime % 60)

        return `${displayDays} Days : ${displayHours < 10 ? '0' + displayHours : displayHours} Hours : ${displayMin < 10 ? '0' + displayMin : displayMin} Min : ${displaySec < 10 ? '0' + displaySec : displaySec} Sec`
    }

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
                <div className='card'>
                    <div className='card-content'>
                        <h2 card-title className='text-dark'>Set CountDown</h2>
                        <div className='w-100'>
                            <h4>{formattedTime()}</h4>
                        </div>
                        {!isTimeSet && (
                            <div className='setupTime input-group '>
                                <input className="form-control" type="number" placeholder="Days"
                                    value={days} onChange={(e) => setDays(parseInt(e.target.value) || 0)} />
                                <input className="form-control" type="number" placeholder="Hours"
                                    value={hours} onChange={(e) => setHours(parseInt(e.target.value) || 0)} />
                                <input className="form-control" type="number" placeholder="Min"
                                    value={min} onChange={(e) => setMin(parseInt(e.target.value) || 0)} />
                                <input className="form-control" type="number" placeholder="Sec"
                                    value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value) || 0)} />

                            </div>
                        )}
                    </div>
                    <div className='btn-group'>
                        <button type='button' className='btn btn-success ' onClick={handleSubmit}>Set Time</button>
                        <button className='btn btn-primary' onClick={() => dispatch(isRunning ? stopCountTimer() : startCountTimer())}>
                            {isRunning ? <i className='bi bi-pause-fill'></i> : <i className='bi bi-play-fill'></i>}
                        </button>
                        <button className='btn btn-danger px-4' onClick={() => {
                            dispatch(resetCountTimer())
                            setIsTimeSet(false)
                        }}>Reset</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CountdownTimer
