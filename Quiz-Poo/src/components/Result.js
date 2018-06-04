import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import ps1 from "../svg/ps1.svg";
import xbox from "../svg/xbox.png";
import nintendo from "../svg/nintendo.png";

import Raiz from "../svg/Raiz.png";
import Nutella from "../svg/Nutella.png";
import Minecraft from "../svg/Minecraft.png";

import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Extensão da Classe React.Component

// Result, recebe os valores calculados como resultado dos componentes GamerConsole e GamerRaiz
// Aqui ocorre o polimorfismo, pois dependendo do resultado de cada método, um resultado será exbido
// para os dois componentes GamerConsole e GamerRaiz.

function Result(props) {
  console.log(props.quizResult);

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="result-content">
        <div>
          {/* Gamer Sony */}
          {props.quizResult === "Sony" ? (
            <div className="result-logo">
              <img src={ps1} className="App-logo" alt="logo" />
            </div>
          ) : (
            ""
          )}
          {/* Gamer Microsoft */}
          {props.quizResult === "Microsoft" ? (
            <div className="result-logo">
              <img src={xbox} className="App-logo" alt="logo" />
            </div>
          ) : (
            ""
          )}
          {/* Gamer Nintendo */}
          {props.quizResult === "Nintendo" ? (
            <div className="result-logo">
              <img src={nintendo} className="App-logo" alt="logo" />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          {/* Gamer Raiz */}
          {props.quizResult === "Raiz" ? (
            <div>
              <div className="result-img">
                <img src={Raiz} alt="logo" />
              </div>
              <div className="gamer-text">
                <h1>Gamer Raiz</h1>
                <div className="description">
                  <h3>
                    <ul>
                      <li>Primeiro Console Super nintendo, Ps1, Ps2</li>
                      <li>Se diverte jogando até Atari</li>
                      <li>Valoriza os gráficos de games antigos</li>
                      <li>Jogava na tv Canal 3</li>
                      <li>
                        Todos os jogos estragavam a televisão (Dizia nossas
                        Mães)
                      </li>
                      <li>
                        Passava mais de 12horas jogando, por que não tinha "Save
                        Game"
                      </li>
                      <li>Memorizava Passwords</li>
                      <li>Apanha no Fliperama Jogando KOF</li>
                    </ul>
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Gamer Nutella */}
          {props.quizResult === "Nutella" ? (
            <div className="result-img">
              <img src={Nutella} alt="logo" />
              <div className="gamer-text">
                <h1>Gamer Nutella</h1>
                <div className="description">
                  <h3>
                    <ul>
                      <li>Primeiro Console Nintendo Ds</li>
                      <li>Só sabe jogar jogos com tutorial</li>
                      <li>Reclama dos gráficos em jogos modernos</li>
                      <li>Precisa de uma televisão com tela curva 4k</li>
                      <li>Precisa do save game de 5 em 5 minutos</li>
                      <li>Passa horas assistindo gameplay no Youtube</li>
                      <li>Mouse ergonomico Rgb</li>
                      <li>Ja vou dormir Mamãe</li>
                    </ul>
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Gamer Minecrat */}
          {props.quizResult === "Minecraft" ? (
            <div className="result-img">
              <img src={Minecraft} alt="logo" />
              <div className="gamer-text">
                <h1>Gamer Minecraft</h1>
                <div className="description">
                  <h3>
                    <ul>
                      <li>Primeiro Console Xbox One</li>
                      <li>Só sabe jogar Minecraft e Batman Lego</li>
                      <li>Joga MOBA ("Lol ou Dota") perde, xinga sua mãe</li>
                      <li>Fan Boy de empresa, não sabe nada</li>
                      <li>Só compra jogos depois de ver análise</li>
                      <li>Gameplay de Minecraft</li>
                    </ul>
                  </h3>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="result-text">
          <h3>
            Você Prefere Jogos <strong>{props.quizResult}</strong>!
          </h3>
          <NavLink to="/">
            <Button>Jogar de novamente</Button>
          </NavLink>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired
};

export default Result;
