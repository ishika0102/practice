/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/

//first dropdown
import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          login
          <select value={this.state.value} onChange={this.handleChange}>
            <option value=""></option>
            <option value="shopowner">Shopowner</option>
            <option value="suplier">Suplier</option>
            
          </select>
        </label>
        
      </form>
    );
  
    
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));


class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          register
          <select value={this.state.value} onChange={this.handleChange}>
            <option value=""></option>
            <option value="shopowner">Shopowner</option>
            <option value="suplier">Suplier</option>
            
          </select>
        </label>
        
      </form>
    );
  
    
  }
}

ReactDOM.render(<App1/>, document.querySelector("#root"));


