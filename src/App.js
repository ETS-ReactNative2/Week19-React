import React from 'react';
import Planets from './Planet.json';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Container from './components/Container';
import Card from './components/Card';
import Row from './components/Row';
import Col from './components/Col';


function shufflePlanets(array) {
  for (let i = array.length -1; i>0;i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends React.Component {
  state = {
    Planets,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({currentScore: newScore, rightWrong: ""});
    if (newScore >= this.state.topScore) {
      this.setState({topScore: newScore});
    }
    else if (newScore === 12) {
      this.setState({rightWrong: "You Win!"});
    }
    this.handleShuffle();
  };
handleReset = () => {
  this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    rightWrong: "PlaceHolder!!!",
    clicked: {}
  });
  this.handleShuffle();
}

handleShuffle=() => {
  let shuffledPlanets = shufflePlanets(Planets);
  this.setState({Planets: shuffledPlanets});
};

  render() {
    return (

      <Wrapper>
        <Navbar
          title="Milky Way Memory Click"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Header />
        <Container>
          <Row>
            {this.state.Planets.map(planet => (
            <Col size="md-3 sm-6">
              <Card 
              key={planet.id}
              handleClick={this.handleClick}
              handleIncrement={this.handleIncrement}
              handleReset={this.handleReset}
              handleShuffle={this.handleShuffle}
              id={planet.id}
              image={planet.image}
              />
            </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </Wrapper >
    );
  }
}

export default App;
