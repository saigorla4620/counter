// CREATING THE INITIAL STATE

const InitialState={
    startTime:0,
    remainingTime:0,
    isRunning:false,
}

// CREATING THE    REDUCER
const CounterTimerReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'START_COUNTER' :
            return {...state,isRunning:true}
        case 'STOP_COUNTER' :
            return {...state,isRunning:false}
        case 'RESET' :
            return {...state,remainingTime:0,isRunning:false}
        case 'TICK' :
            return {...state,remainingTime:Math.max(state.remainingTime-1,0)}
        case 'SET_TIMER' :
            return {...state,startTime:action.payload,remainingTime:action.payload}
        default :
            return state
    }

}

export default CounterTimerReducer