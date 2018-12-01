import React, { Component } from 'react';

/*
 props:

 onAdd: Function(todoTitle)

*/
export default class AddTodoForm extends Component {
  state = {
    todoTitle: ''
  };

  /*
  // Handling input onChange event.
  handleChange = event => {};
  */

  /*
  // Handling form submission;
  handleSubmit = event => {};
  */

  render() {
    return (
      <form>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="¿Qué necesitas hacer?"
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
