
const TodoMiddleware = store => next => action => {  
    console.log("action", action);
    next(action);
  
  };
  export default TodoMiddleware;