import React from 'react';
import HeadNav from './components/HeadNav';
import Trade from './components/Trade';
import InfoHead from './components/InfoHead'
import Sidebar from './components/Sidebar'
import './App.css';
import axios from 'axios';

class App extends React.Component {
  state = {
    trades : []
  }

  componentDidMount() {
    console.log('Using CORS proxy.');
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.sauda.co/suvidha/allCompletedOffers";
    const apiKey = "?apiKey=ORfbGjdg9IK4rC5IRmG48kptPkuQb5af";
    axios.post(proxyurl + url + apiKey)
      .then(res => this.setState({ trades: res.data }))
      .then(console.log('Fetched'));
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <HeadNav />
        </header >
        <div className="InfoHead" >
          <InfoHead trades = {this.state.trades} />
        </div>
        <div className="Sidebar" >
          <Sidebar />
        </div>
        <div className="Trade">
          <Trade trades = {this.state.trades} />
        </div>
      </div>
    ); 
  }
}

export default App;
