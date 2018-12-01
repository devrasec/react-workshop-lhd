import React from 'react';
import TextInput from './TextInput';

export default function UsernameForm({ username, onChange }) {
  return (
    <div className="mb-4">
      <TextInput
        label="Nombre de usuario"
        name="username"
        value={username}
        placeholder="¿Cómo te llaman tus amigos?"
        onChange={event => onChange(event.target.value)}
      />

      <button type="button" className="btn btn-primary">
        Continuar
      </button>
    </div>
  );
}
