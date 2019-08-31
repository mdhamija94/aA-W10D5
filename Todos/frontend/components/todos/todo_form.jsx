import React from "react";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: 3,
      title: "",
      body: "",
      done: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let thing = e.target.id;
    let obb = {};
    obb[thing] = e.target.value
    this.setState(obb);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state);
    this.setState({
      // id: this.state.id + 1,
      title: "",
      body: "",
      done: false
    })
  }

  render() {
    return (
      <div>
        <h1>Add Todo</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input onChange={this.handleChange} id="title" type="text" value={this.state.title} />

          <label htmlFor="body">Body:</label>
          <textarea onChange={this.handleChange} id="body" cols="30" rows="3" value={this.state.body}></textarea>

          <input type="submit" value="ADD TODO" />
        </form>
      </div>
    )
  }
}