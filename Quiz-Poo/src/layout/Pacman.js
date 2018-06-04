import React from "react";
import "../css/Pacman.css";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="pacman">
        <div className="pacman-top" />
        <div className="pacman-bottom" />
        <div className="feed" />
      </div>
    );
  }
}
