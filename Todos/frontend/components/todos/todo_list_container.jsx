import { connect } from 'react-redux';
import TodoList from './todo_list';
import { fetchTodos } from "../../actions/todo_actions"


const mapStateToProps = (state) => {
  return {
    todos: Object.values(state.todos)
  } 
}

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  otherFunction: () => console.log("wesleys getting yelled at")
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);