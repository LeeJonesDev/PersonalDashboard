import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import GridLayout from 'react-grid-layout';

import DashboardCard from './Components/DashboardCard'
import DashboardCardContent from './Components/DashboardCardContent'


class App extends Component {

  render() {      

    const sites = [
      {text:"google.com", url:"http://google.com", description: "this is a link to google."},
      {text:"google.com", url:"http://google.com"},
      {text:"google.com", url:"http://google.com"}
    ]

    const cardContent = <DashboardCardContent 
      sites={sites} 
      title={"Links Title"} 
      color={"textSecondary"}
    />
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DashboardCard 
          variant={"outlined"} 
          content={cardContent}
        />
      </div>
    );
  }
}

export default App;
