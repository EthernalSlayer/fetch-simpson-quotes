import React from 'react';
import axios from 'axios';

const sampleSimpson = {
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  quote: "Ha ha!"
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: sampleSimpson
    }

    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes() {
    //Send the request
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      //Extract the DATA from the received response
      .then(response => response.data)
      //Use this data to update the state
      .then(data => {
        this.setState({
          quotes: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Simpson Quotes App</h1>
        <p><strong>{this.state.quotes.character}</strong></p>
        <p>{this.state.quotes.quote}</p>
        <img src={this.state.quotes.image} />
        <button type="button" onClick={this.getQuotes}>Get Quotes</button>
      </div>
    );
  }
}

export default App;
