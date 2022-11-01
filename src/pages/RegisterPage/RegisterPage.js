import React, { Component } from "react";

export default class registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      correo: "",
      telefono: "",
      direccion: "",
      contrasena: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { nombre, correo, telefono, direccion, contrasena } = this.state;
    console.log(nombre, correo, telefono, direccion, contrasena);
    fetch("http://localhost:3030/api/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        nombre,
        correo,
        telefono,
        direccion,
        contrasena,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
      }).catch(err => console.log(err));
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>REGISTRATE!</h3>

        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => this.setState({ nombre: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Correo</label>
          <input
            type="email"
            className="form-control"
            placeholder="Ingrese un correo"
            onChange={(e) => this.setState({ correo: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Teléfono</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese un teléfono"
            onChange={(e) => this.setState({ telefono: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Direccion</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese la dirección de envío"
            onChange={(e) => this.setState({ direccion: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Ingrese una contraseña"
            onChange={(e) => this.setState({ contrasena: e.target.value })}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </div>
        <p className="forgot-password text-right">
          Ya tiene cuenta? <a href="/login">Ingrese</a>
        </p>
      </form>
    );
  }
}