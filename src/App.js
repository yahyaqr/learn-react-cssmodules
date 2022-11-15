import React, { Component } from 'react';
import styles from './App.module.css';
import Title from './components/Title/Title';
import Background from './components/Background/Background';
import Grid from './components/Grid/Grid';
import Rocket from './components/Rocket/Rocket';
import Smoke from './components/Rocket/Smoke';
import facts from './data/NASA_facts.json';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      facts,
    }
  }

  updateClicked = (id) => {
    let stateCopy = Object.assign({}, this.state);
    stateCopy.facts[id].clicked = !stateCopy.facts[id].clicked;
    this.setState(stateCopy);
    console.log(this.state);
  }

  render() {
    return (
      <div className={styles.App}>
        <Title />
        <Background />
        <Grid facts={this.state.facts} updateClicked={this.updateClicked} />
        <Rocket />
        <Smoke />
      </div>
    )
  }
}