import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { useRoutes } from 'hookrouter';
import './App.css';
import data from './Data';

import NewCardBtn from './components/NewCard';
import ScoreCard from './components/ScoreCard';

const test = () => {
  console.log("clicked");

  return null;
}

const Scores = (props) => {

  const scores = props.scores.map(score => {
    return (
      <li className="Score" key={score.player}>
        <h4>{score.player}</h4>
        <h4>{score.score}</h4>
      </li>
    );
  });

  return scores;
}

const Card = (props) => {

  const cards = props.data.map(course => {
    return (
      <div className="Card" key={course.courseName}>
        <h2>{course.courseName}</h2>
        <ul className="Scores">
          <Scores scores={course.scores}/>
        </ul>
      </div>
    );
  });

  return cards;
}

const ScoreCards = (props) => {
  return(
    <div className="Cards">
      <Card data={props.data}/>
    </div>
  );
}

const App = () => {
  return(
    <div className="container">
      <ScoreCards data={data}/>
      <Router>
        <Route exact path="/" component={NewCardBtn} />
        <Route path="/newCard" component={ScoreCard} />
      </Router>
    </div>
  );
}

export default App;
