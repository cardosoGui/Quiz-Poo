import React from "react";

// Extensão da Classe React.Component

// Question é uma função que retorna uma questão dentro de um elemento (HTML - h2)
// às props são os dados de entrada.

function Question(props) {
  return <h2 className="question">{props.content}</h2>;
}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
