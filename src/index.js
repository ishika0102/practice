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
import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="shopowner">Shopowner</option>
            <option value="suplier">Suplier</option>
            
          </select>
        </label>
        
      </form>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

