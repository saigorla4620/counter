const initialState = {
    running: false,
    time: 0
  };




export const StopwatchReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'START':
        return { ...state, running: true };
      case 'STOP':
        return { ...state, running: false };
      case 'RESET':
        return { ...state, time: 0, running: false };
      case 'TICK':
        return state.running ? { ...state, time: state.time + 1 } : state;
      default:
        return state;
    }
};