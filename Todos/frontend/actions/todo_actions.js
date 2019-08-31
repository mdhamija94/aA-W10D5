export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
import * as Utils from "../utils/todo_api_util";


export const receiveTodo = (todo) => ({
    type: RECEIVE_TODO,
    todo: todo
});

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos: todos
  }
};

export const fetchTodos = () => dispatch => {
  return Utils.fetchTodos()
    .then( todos => dispatch(receiveTodos(todos)));
};

export const createTodo = (todo) => (dispatch) => {
  return Utils.createTodo(todo)
    .then( todo => dispatch(receiveTodo(todo)) );
}