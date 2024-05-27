


export const startCountTimer=()=>{
    return {
        type:'START_COUNTER'
    }

}
export const stopCountTimer=()=>{
    return {
        type:'STOP_COUNTER'
    }
    
}
export const resetCountTimer=()=>{
    return {
        type:'RESET'
    }
    
}
export const tickTimer=()=>{
    return {
        type:'TICK'
    }
    
}

export const setupTimer =(time)=>{
    return {
        type:'SET_TIMER',
        payload:time
    }
    
}