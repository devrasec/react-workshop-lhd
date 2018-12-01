import React, { PureComponent } from 'react';
import UsernameForm from './components/UsernameForm';
import Check from './components/Check';
import AddTodoForm from './components/AddTodoForm';

const userNameKey = 'todo-username';

class App extends PureComponent {
  state = {
    todos: [],
    username: ''
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
      completed: false
    };

    this.setState(prevState => ({ todos: [...prevState.todos, todo] }));
  };

  render() {
    const { username, todos } = this.state;

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
              {todos.map((todo, index) => (
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
