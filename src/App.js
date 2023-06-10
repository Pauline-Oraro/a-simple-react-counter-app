import React from 'react';
import Counter from './components/counter'
import Reset from './components/reset'
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }
  increment = () => {
    this.setState({count : this.state.count + 1})
  }
  decrement = () => {
    this.setState({count: this.state.count - 1})
  }
  resetButton = () => {
    this.setState({count : 0})
  }
  render (){
    return (
      <div>
        <h1>COUNTER APP</h1>
        <div className="App">
        <Counter  count={this.state.count} increment = {this.increment} decrement= {this.decrement}/>
        <Reset resetButton = {this.resetButton}/>
        </div>
      </div>
    );
  }
}

export default App;
