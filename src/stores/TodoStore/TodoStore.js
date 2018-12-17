import MicroEmitter from 'micro-emitter';
import partial from "lodash/partial";


function TodoStore(dataService, userStore){
  let todos = [];
  const eventEmitter = new MicroEmitter();
  const CHANGE_EVENT = "change";

  function fetch(){
    return dataService.get().then(setLocalTodos);
  }

  function setLocalTodos(newTodos){
    todos = newTodos;
    eventEmitter.emit(CHANGE_EVENT);
  }

  function toViewModel(todo){
    return Object.freeze({
      id : todo.id,
      title : todo.title,
      // NAME VS USERNAME?!
      userName = userStore.getById(todo.id).name;
    })
  }

  function descById(todo1, todo2){
    return parseInt(todo1.id) - parseInt(todo2.id);
  }

  function queryContainsTodo(query, todo){
    if(query && query.text){
      return todo.title.inclues(query.text);
    }
    return true;
  }

  function getBy(query){
    const top = 25;
    const byQuery = partial(queryContainsTodo, query);
    return todos.filter(byQuery)
                .map(toViewModel)
                .sort(descById)
                .slice(0, top);
  }

  function onChange(handler){
    eventEmitter.on(CHANGE_EVENT, handler);
  }

  return(
    Object.freeze({
      fetch,
      getBy,
      onChange
    });
  )
}


export default TodoStore