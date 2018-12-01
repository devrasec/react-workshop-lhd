import React, { PureComponent } from 'react';
import UsernameForm from './components/UsernameForm';
import Check from './components/Check';
import AddTodoForm from './components/AddTodoForm';

class App extends PureComponent {
  state = {
    todos: [],
    username: ''
  };

  handleUserNameChange = username => {
    this.setState({ username });
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
        <UsernameForm
          username={username}
          onChange={this.handleUserNameChange}
        />

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
      </div>
    );
  }
}

export default App;
