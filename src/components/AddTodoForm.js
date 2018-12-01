import React, { Component } from 'react';
import classNames from 'classnames';

export default class AddTodoForm extends Component {
  state = {
    todoTitle: ''
  };

  handleChange = event => {
    this.setState({ todoTitle: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { todoTitle } = this.state;

    if (todoTitle.trim()) {
      this.props.onAdd(todoTitle);
      this.setState({ todoTitle: '' });
    }
  };

  render() {
    const { todoTitle } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            value={todoTitle}
            placeholder="¿Qué necesitas hacer?"
            onChange={this.handleChange}
          />

          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">
              Agregar
            </button>
          </div>
        </div>
      </form>
    );
  }
}
