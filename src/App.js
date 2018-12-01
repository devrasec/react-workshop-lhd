import React, { Component } from 'react';
import UsernameForm from './components/UsernameForm';
import Check from './components/Check';
import AddTodoForm from './components/AddTodoForm';
import {
  subscribeToTaskCreated,
  subscribeToTaskDone,
  getAllTasks,
  addTask,
  taskDone
} from './services/api';
import findIndex from 'lodash/findIndex';

const userNameKey = 'todo-username';
const TODO_ALL = 'TODO_ALL';
const TODO_ACTIVE = 'TODO_ACTIVE';
const TODO_DONE = 'TODO_DONE';

class App extends Component {
  constructor(props) {
    super(props);

    this.updateTasksDone = this.updateTasksDone.bind(this);
  }

  state = {
    todos: [],
    username: '',
    nowShowing: TODO_ALL
  };

  async componentDidMount() {
    if (sessionStorage.getItem(userNameKey) !== null) {
      this.setState({ username: sessionStorage.getItem(userNameKey) });
    }

    subscribeToTaskCreated(task => {
      this.setState(prevState => ({ todos: [...prevState.todos, task] }));
    });

    subscribeToTaskDone(task => {
      this.updateTasksDone(task);
    });

    try {
      const response = await getAllTasks();

      this.setState({ todos: response.data });
    } catch (error) {
      console.log(error);
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

  updateTasksDone(task) {
    const { todos } = this.state;

    const todoIndex = findIndex(todos, t => t._id === task._id);

    if (todoIndex >= 0) {
      const newTodos = todos;
      newTodos[todoIndex] = { ...todos[todoIndex], done_at: task.done_at };
      console.log(newTodos[todoIndex]);

      this.setState({ todos: newTodos });
    }
  }

  onUsernameAdd = username => {
    this.setState({ username, userNameAdded: true });
  };

  addToDo = async todoTitle => {
    const task = {
      title: todoTitle,
      userName: this.state.username
    };

    try {
      const response = await addTask(task);
      console.log('task added: ', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  getToDos = () => {
    const { nowShowing, todos } = this.state;

    switch (nowShowing) {
      case TODO_ACTIVE:
        return todos.filter(todo => !todo.done_at);
      case TODO_DONE:
        return todos.filter(todo => todo.done_at);
      default:
        return todos;
    }
  };

  setTaskDone = async todoId => {
    try {
      const response = taskDone(todoId);
    } catch (error) {
      console.log(error);
    }
  };

  changeToDoFilter = filterBy => {
    this.setState({ nowShowing: filterBy });
  };

  render() {
    const { username, nowShowing } = this.state;

    return (
      <div className="app container">
        {!username && <UsernameForm onSubmit={this.onUsernameAdd} />}

        {username && (
          <>
            <div className="jumbotron">
              <div className="container">
                <h1 className="display-4">Hola, {username}!</h1>
                <p className="lead">
                  Ahora puedes agregar las cosas que tienes pendientes de hacer.
                </p>
              </div>
            </div>

            <AddTodoForm onAdd={this.addToDo} />

            <div className="btn-toolbar mb-3">
              <div className="btn-group">
                <button
                  type="button"
                  className={`btn ${
                    nowShowing === TODO_ALL ? 'btn-dark' : 'btn-light'
                  }`}
                  onClick={() => this.changeToDoFilter(TODO_ALL)}
                >
                  Todas
                </button>

                <button
                  type="button"
                  className={`btn ${
                    nowShowing === TODO_ACTIVE ? 'btn-dark' : 'btn-light'
                  }`}
                  onClick={() => this.changeToDoFilter(TODO_ACTIVE)}
                >
                  Activas
                </button>

                <button
                  type="button"
                  className={`btn ${
                    nowShowing === TODO_DONE ? 'btn-dark' : 'btn-light'
                  }`}
                  onClick={() => this.changeToDoFilter(TODO_DONE)}
                >
                  Terminadas
                </button>
              </div>
            </div>

            <div>
              {this.getToDos().map((todo, index) => (
                <div
                  key={todo._id}
                  className="card mb-3 shadow-sm rounded border-light"
                >
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-2 col-sm-1">
                        <button
                          className="btn btn-light"
                          onClick={() => this.setTaskDone(todo._id)}
                        >
                          <Check checked={!!todo.done_at} />
                        </button>
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
                      Creado por {todo.created_by}
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
