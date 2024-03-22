export function createHooks(callback) {
  let currentStateKey = 0;
  const states = [];

  const useState = (initState) => {
    
    const key = currentStateKey;
    
    if (states[key] === undefined) {
      states[key] = initState;
    }

    const setState = (newState) => {
      if (newState === states[key]) return;
      
      states[key] = newState;
      
      resetContext();
      callback();
    }
    currentStateKey += 1;
    return [ states[key] , setState ];
  }

  const useMemo = (fn, refs) => {
    return fn();
  };

  const resetContext = () => {
  }

  return { useState, useMemo, resetContext };
}
