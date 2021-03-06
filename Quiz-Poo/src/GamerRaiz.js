import React, { Component } from "react";
import update from "react-addons-update";
import quizGamerRaiz from "./api/quizGamerRaiz";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "./css/App.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class GamerRaiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {
        Raiz: 0,
        Nutella: 0,
        Minecraft: 0
      },

      result: ""
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizGamerRaiz.map(question =>
      this.shuffleArray(question.answers)
    );
    this.setState({
      question: quizGamerRaiz[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // Enquanto houver elementos para embaralhar...
    while (0 !== currentIndex) {
      // Escolhe um elemento Restante...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // E troque pelo elemento atual...
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizGamerRaiz.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      console.log(this.getResults());
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: currentValue => currentValue + 1 }
    });

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizGamerRaiz[counter].question,
      answerOptions: quizGamerRaiz[counter].answers,
      answer: ""
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);

    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    console.log(result);
    if (result.length === 1 || result.length === 2) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: "Undetermined" });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizGamerRaiz.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        component="App"
        transitionName="fade"
        transitionEnterTimeout={3000}
        transitionLeaveTimeout={3000}
        transitionAppear
        transitionAppearTimeout={3000}
      >
        <div className="App">
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default GamerRaiz;
