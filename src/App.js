import React, { Component } from 'react';
import Quote from './components/Quote';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    quotes:[],
    index: 0 
    }
  }
  
  //fetch "quotes.json" from server and update state using axios http client
  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    .then(response => this.setState({
      quotes: response.data.quotes
    }) 
    )
  }
  
  //generate random index number and update state
  generateIndex = () => {
    this.setState({
      index: Math.floor(Math.random()*this.state.quotes.length)
    })
  };

  render(){
    return(
      //render Quote component if quotes array from state is not empty
      <div id="quote-box" className="wrapper">{this.state.quotes.length>0 &&
       <Quote 
       text={this.state.quotes[this.state.index].quote} 
       author={this.state.quotes[this.state.index].author} 
       generateIndex={this.generateIndex} />
      }</div>  
    );
  }
}

export default App

