import './App.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Contacto {
  constructor(nombre, apellido, email, conectado) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.conectado = conectado;
  }
}


class ComponenteA extends Component {
  render() {
    
    const { contacto } = this.props;

    return (
      <div>
        <h2>Componente A: </h2>
        <p>Nombre: { contacto.nombre }</p>
        <p>Nombre: { contacto.apellido }</p>
        <p>Nombre: { contacto.email }</p>
        <ComponenteB contacto={ contacto } />
      </div>
    );
  }
}


ComponenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired
};


class ComponenteB extends Component {
  toggleConectado = () => {
    const { contacto } = this.props;
    contacto.conectado = !contacto.conectado;
    this.forceUpdate();
  }

  render() {
    const { contacto } = this.props;
    const estado = contacto.conectado ? 'Conectado en linea' : 'Contacto no disponible';

    return(
      <div>
        <h3>Componente B</h3>
        <p>Estado: { estado }</p>
        <button onClick={ this.toggleConectado }>Cambiar estado</button>
      </div>
    );
  }
}

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto).isRequired
}



class App extends Component {
  render() {

    const contacto = new Contacto('Ivan', 'Tigro', 'tigrofeliz@gmail.com', true);

    return (
      <div>
        <h1>App</h1>
        <ComponenteA contacto={ contacto } />
      </div>
    );
  }
}


export default App;

