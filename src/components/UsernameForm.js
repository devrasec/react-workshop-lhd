import React, { Component } from 'react';
import TextInput from './TextInput';

/*
 props:

 onSubmit: Function(username)

*/

export default class UsernameForm extends Component {
  state = {
    username: '',
    error: ''
  };

  /*
  // validate username, must be required.
  handleSubmit = event => {};
  */

  /*
  // Handling input onChange event.
  handleChange = event => {};
  */

  render() {
    return (
      <form>
        <div className="mb-4">
          <TextInput
            label="Nombre de usuario"
            name="username"
            placeholder="¿Cómo te llaman tus amigos?"
          />

          <button type="submit" className="btn btn-primary">
            Continuar
          </button>
        </div>
      </form>
    );
  }
}
