import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';

class App extends Component {

  state = {//영역 안에있는 num 은 5이다
    num : 0
  }

  render(){

    var num = "5";

    return (
      <div className="App">
        <h1>초기화면</h1>
        <h2>결과창 : "{this.state.num}"</h2>
        <button onClick={()=>{
          this.setState({
            num: this.state.num + 1
          });
        }}>UP</button>
      </div>
    );
  }  
}

export default App;