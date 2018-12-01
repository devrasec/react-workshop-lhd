import React, { Component } from 'react';
import TextInput from './TextInput';

export default class UsernameForm extends Component {
  state = {
    username: '',
    error: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username } = this.state;

    if (!username.trim()) {
      this.setState({
        error: 'El nombre de usuario es requerido',
        username: ''
      });
    } else {
      this.props.onSubmit(this.state.username);
    }
  };

  handleChange = event => {
    this.setState({ username: event.target.value, error: '' });
  };

  render() {
    const { username, error } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-4">
          <TextInput
            label="Nombre de usuario"
            name="username"
            value={username}
            placeholder="¿Cómo te llaman tus amigos?"
            onChange={this.handleChange}
            error={error}
          />

          <button type="submit" className="btn btn-primary">
            Continuar
          </button>
        </div>
      </form>
    );
  }
}
