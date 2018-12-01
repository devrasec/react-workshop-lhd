import React, { PureComponent } from 'react';
import UsernameForm from './components/UsernameForm';
import Check from './components/Check';
import AddTodoForm from './components/AddTodoForm';

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

  componentDidMount() {
    if (sessionStorage.getItem(userNameKey) !== null) {
      this.setState({ username: sessionStorage.getItem(userNameKey) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const persistedUsername = sessionStorage.getItem(userNameKey);
    const { username } = this.state;

    if (
      (persistedUsername === null && username) ||
      prevState.username !== username
    ) {
      sessionStorage.setItem(userNameKey, username);
    }
  }

  onUsernameAdd = username => {
    this.setState({ username, userNameAdded: true });
  };

  addToDo = todoTitle => {
    const todo = {
      title: todoTitle,
      completed: false,
      username: this.state.username
    };

    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  getToDos = () => {
    const { nowShowing, todos } = this.state;

    switch (nowShowing) {
      case TODO_ACTIVE:
        return todos.filter(todo => !todo.completed);
      case TODO_DONE:
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  render() {
    const { username } = this.state;

    return (
      <div className="app container">
        {!username && <UsernameForm onSubmit={this.onUsernameAdd} />}

        {username && (
          <>
            <div class="jumbotron">
              <div class="container">
                <h1 class="display-4">Hola, {username}!</h1>
                <p class="lead">
                  Ahora puedes agregar las cosas que tienes pendientes de hacer.
                </p>
              </div>
            </div>

            <AddTodoForm onAdd={this.addToDo} />

            <div>
              {this.getToDos().map((todo, index) => (
                <div
                  key={index}
                  className="card mb-3 shadow-sm rounded border-light"
                >
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-2 col-sm-1">
                        <Check />
                      </div>
                      <div className="col-8 col-sm">{todo.title}</div>
                      <div className="col-2 col-sm-1">
                        <button
                          type="button"
                          className="close"
                          aria-label="Eliminar"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="card-footer">
                    <small className="text-muted">
                      Creado por {todo.username}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default App;
