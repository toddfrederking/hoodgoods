import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import Logo from "./Components/Logo";
import HoodsTitle from "./Components/HoodsTitle";
import HoodImages from "./Components/HoodImages";
import Bio from "./Components/Bio";



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tshirts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3002/tshirts')
      .then(results => results.json())
      .then(json => {
        const results = json.pop();
        this.setState({
          tshirts: results.tshirts
        })
      });
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <Logo/>
        <HoodsTitle/>
        <HoodImages tshirts={this.state.tshirts}/>
        <Bio/>
        
      </div>
    );
  }
}

export default App;
