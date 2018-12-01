import React, { PureComponent } from 'react';

const userNameKey = 'todo-username';
const TODO_ALL = 'TODO_ALL';
const TODO_ACTIVE = 'TODO_ACTIVE';
const TODO_DONE = 'TODO_DONE';

class App extends PureComponent {
  state = {
    todos: [],
    username: '',
    nowShowing: TODO_ALL
  };

  /*
    Persist todos on SessionStorage.
  */
  // componentDidMount() {
  //   if (sessionStorage.getItem(userNameKey) !== null) {
  //     this.setState({ username: sessionStorage.getItem(userNameKey) });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const persistedUsername = sessionStorage.getItem(userNameKey);
  //   const { username } = this.state;

  //   if (
  //     (persistedUsername === null && username) ||
  //     prevState.username !== username
  //   ) {
  //     sessionStorage.setItem(userNameKey, username);
  //   }
  // }

  /*
  updateTasksDone(task) {}
  */

  /*
  onUsernameAdd = username => {};
  */

  /*
  {
    title: string,
    completed: boolean,
    username: string,
  }
  addTodo = todoTitle => {};
  */

  /*
  setTaskDone = todoId => {};
  */

  /*
  // Return todos filtered by nowShowing state.
  getTodos = () => {};
  */

  /*
  changeTodoFilter = filterBy => {};
  */

  render() {
    const { nowShowing } = this.state;

    return (
      <div className="app container">
        {/* Render the component to add the username */}

        <div className="jumbotron">
          <div className="container">
            <h1 className="display-4">Hola, Fulano!</h1>
            <p className="lead">
              Ahora puedes agregar las cosas que tienes pendientes de hacer.
            </p>
          </div>
        </div>

        {/* Render the component to add the todo */}

        <div className="btn-toolbar mb-3">
          <div className="btn-group">
            <button
              type="button"
              className={`btn ${
                nowShowing === TODO_ALL ? 'btn-dark' : 'btn-light'
              }`}
            >
              Todas
            </button>

            <button
              type="button"
              className={`btn ${
                nowShowing === TODO_ACTIVE ? 'btn-dark' : 'btn-light'
              }`}
            >
              Activas
            </button>

            <button
              type="button"
              className={`btn ${
                nowShowing === TODO_DONE ? 'btn-dark' : 'btn-light'
              }`}
            >
              Terminadas
            </button>
          </div>
        </div>

        {/* render todos */}
      </div>
    );
  }
}

export default App;
