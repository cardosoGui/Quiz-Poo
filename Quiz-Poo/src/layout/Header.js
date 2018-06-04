import React from "react";
import logo from "../svg/logo.svg";

export default class Header extends React.Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Poo Quiz</h2>
      </div>
    );
  }
}
