import React from "react";

// Extensão da Classe React.Component

// QuestionCount, é o contador de questões, que retorna um elemento (HTML) referentes
// a contagem das questões.

function QuestionCount(props) {
  return (
    <div className="questionCount">
      <p>
        Questionário <span>{props.counter}</span> de <span>{props.total}</span>
      </p>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
