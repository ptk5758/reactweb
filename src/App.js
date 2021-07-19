import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <div className="header">
          <h1>대충 로고있느자리</h1>
        </div>
        <div className="content">
          <div>
            <input/>
          </div>
          <div>
            <input/>
          </div>
          <button className="mybth">로그인</button>
        </div>
      </div>
    );    
  }  
}

export default App;
