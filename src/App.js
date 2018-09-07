import React, { Component } from 'react';

import state from './state';
import reducer from './Reducers/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import Logo from "./Components/Logo";
import HoodsTitle from "./Components/HoodsTitle";
import HoodImages from "./Components/HoodImages";
import Bio from "./Components/Bio";

const store = createStore(reducer);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tshirts: []
    }
  }

  componentDidMount() {
    fetch(`/tshirts`)
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
    <Provider store={store}>
      <div className="App">
        <NavBar/>
        <Logo/>
        <HoodsTitle/>
      
        <HoodImages tshirts={this.state.tshirts}/>
      
        <Bio/>
      </div>
    </Provider>
    );
  }
}

export default App;
