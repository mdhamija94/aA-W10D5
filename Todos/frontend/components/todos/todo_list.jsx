import React from 'react';
import TodoListItem from "./todo_list_item";


// const TodoList = (props) => {
//   console.log(props);
//   return(
//     <ul>
//       {
//         props.todos.map(todo => {
//           return (
//             <TodoListItem todo={todo} key={todo.id} />
//           )
//         })
//       }
//     </ul>
//   )
// }

// export default TodoList;

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map(todo => {
            return (
              <TodoListItem todo={todo} key={todo.id} />
            )
          })
        }
      </ul>
    )
  }
}