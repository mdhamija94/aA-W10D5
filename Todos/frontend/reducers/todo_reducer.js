import { RECEIVE_TODO, RECEIVE_TODOS } from "../actions/todo_actions"

// const iS = {
//   1: {
//     id: 1,
//     title: "pass a06",
//     body: "with soap",
//     done: false
//   },
//   2: {
//     id: 2,
//     title: "wash dog",
//     body: "with studying",
//     done: true
//   }
// };

const todosReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODO:
      nextState[action.todo.id] = action.todo;
      return nextState;
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach(todo => {
        nextState[todo.id] = todo;
      })
      return nextState;
    default:
      return state;
  }
}

export default todosReducer;