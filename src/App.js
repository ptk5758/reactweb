import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';

class App extends Component {  

  state = {
    value : 0
  }

  render(){

    function upCount() {
      this.setState({
        value: 5
      });
    }

    return (
      <div className="App">
        <h1>카운트 만들기</h1>
        <h2>{this.state.value}</h2>
        <button onClick={upCount.bind(this)}>UP</button>
      </div>
    );
  }  
}

export default App;