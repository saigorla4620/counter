import { createStore , combineReducers } from "redux";
import CounterReducer from "../reducers/counterReducer";
import CounterTimerReducer from "../reducers/countDowntimerReducer";
import { StopwatchReducer } from "../reducers/stopWatchReducer";


// root Reducers for combining the multiple reducers 
const rootReducers =combineReducers({
    counter:CounterReducer,
    countTimer:CounterTimerReducer,
    stopwatch:StopwatchReducer

    
})


// creating the Store
const Store=createStore(rootReducers )

export default Store