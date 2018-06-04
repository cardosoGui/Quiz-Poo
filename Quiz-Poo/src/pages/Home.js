import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Jumbotron style={{ padding: "1em" }}>
          <div className="jumbo-content">
            <h1>Perfil Gamer</h1>
            <p>
              Brique de advinhar seu perfil gamer, respondendo a este quiz Super
              Divertido!!
            </p>
            <p>
              <NavLink to="/gamer-console">
                <Button>Seu console favorito</Button>
              </NavLink>
              <NavLink to="/gamer-raiz">
                <Button>Gamer Raiz</Button>
              </NavLink>
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
