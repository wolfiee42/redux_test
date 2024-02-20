const logger = (store) => (next) => (action) => {

    const currentState = store.getState();
    console.log(currentState);
    console.log(action);
    next(action);

    const updatedstate = store.getState();
    console.log(updatedstate);
};


export default logger;