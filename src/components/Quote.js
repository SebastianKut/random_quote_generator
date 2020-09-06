import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Quote extends Component {
  
      render() {
        return(
        <div className="container">
            <div className="quote-container">
                <p id="text" className="quote"><i className="fas fa-quote-left"></i> {this.props.text}</p>
                <p id="author" className="author">- {this.props.author}</p>
            </div>
            <div className="buttons-container">
                <div className="tweet"><a href="twitter.com/intent/tweet" id="tweet-quote"><i className="fab fa-twitter-square"></i></a></div>
                <button id="new-quote" className="btn" onClick={this.props.generateIndex}>New Quote</button>
            </div>  
        </div>
        );
      }
      
}



export default Quote;

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    generateIndex: PropTypes.func.isRequired,
}