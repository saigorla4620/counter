import { useEffect } from 'react'
import { Start, Stop, Reset, Tick } from '../actions/stopWatchActions'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const Stopwatch = () => {
    const Dispatch = useDispatch()
    const { running, time } = useSelector(state => state.stopwatch);

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                Dispatch(Tick());
            }, 1000);
        }
        console.log(time);
        return () => clearInterval(interval);
    }, [running, Dispatch]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    };
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


            <div className='main vh-100'>
                <div className=' p-5 d-grid justify-content-center align-items-center vh-100'>
                    <div className='stop-watch-card d-flex justify-content-center'>
                        <div>
                            <h2 className='text-center text-white'>Stop Watch</h2>
                            <div className='stop-watch mt-5'>
                                <h2 className='text-center'>{formatTime(time)}</h2>
                            </div>
                            <div className='d-grid gap-2 d-flex justify-content-center mt-5'>
                                {/* <button className="btn btn-96 text-success"  onClick={() => Dispatch(Start())} disabled={running}>Start</button>
                        <button className="btn btn-96 text-danger"  onClick={() => Dispatch(Stop())} disabled={!running}>Stop</button> */}
                                <button className='btn-stop' onClick={() => Dispatch(running ? Stop() : Start())}>
                                    {running ? <i className='bi bi-pause-fill'></i> : <i className='bi bi-play-fill'></i>}
                                </button>
                                <button className="btn-stop" onClick={() => Dispatch(Reset())}><i className='bi bi-arrow-clockwise'></i></button>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}

export default Stopwatch