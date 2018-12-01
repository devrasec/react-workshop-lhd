import React from 'react';
import Check from './Check';

export default function ToDoItem({ id, title, username }) {
  return (
    <div key={id} className="card mb-3 shadow-sm rounded border-light">
      <div className="card-body">
        <div className="row align-items-center">
          <div className="col-2 col-sm-1">
            <Check />
          </div>
          <div className="col-8 col-sm">{title}</div>
          <div className="col-2 col-sm-1">
            <button type="button" className="close" aria-label="Eliminar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <small className="text-muted">Creado por {username}</small>
      </div>
    </div>
  );
}
