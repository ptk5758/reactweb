import { Component } from 'react';
import Header from './components/Header';
import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';

class App extends Component {  

  state = {
    value : 0
  }

  render(){

    function upCount() {
      this.setState({
        value: this.state.value+"*"
      });
    }

    function downCount() {

      this.setState({
        value: "*"
      });

      if(this.state.value < 0){
        alert("0이하는 누를수 없음");
        this.setState({
          value: this.state.value+"*"
        });
      }

    }

    return (
      <div className="App">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    );
  }  
}

export default App;