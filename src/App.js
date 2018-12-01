import React, { Component } from 'react';
import TextInput from './components/TextInput';
import Check from './components/Check';

class App extends Component {
  render() {
    return (
      <div className="app container">
        <div className="mb-4">
          <TextInput
            label="Nombre de usuario"
            name="username"
            placeholder="¿Cómo te llaman tus amigos?"
          />

          <button type="button" className="btn btn-primary">
            Continuar
          </button>
        </div>

        <div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="¿Qué necesitas hacer?"
            />

            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Agregar
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="card mb-3 shadow-sm rounded border-light">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-2 col-sm-1">
                  <Check />
                </div>
                <div className="col-8 col-sm">Sacar a pasear a los perros</div>
                <div className="col-2 col-sm-1">
                  <button type="button" className="close" aria-label="Eliminar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 shadow-sm rounded border-light">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-2 col-sm-1">
                  <Check />
                </div>
                <div className="col-8 col-sm">
                  Hacer la tarea de matemáticas
                </div>
                <div className="col-2 col-sm-1">
                  <button type="button" className="close" aria-label="Eliminar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3 shadow-sm rounded border-light">
            <div className="card-body">
              <div className="row align-items-center">
                <div className="col-2 col-sm-1">
                  <Check checked />
                </div>
                <div className="col-8 col-sm">Estudiar React</div>
                <div className="col-2 col-sm-1">
                  <button type="button" className="close" aria-label="Eliminar">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
