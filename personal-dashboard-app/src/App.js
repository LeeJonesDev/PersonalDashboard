import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import GridLayout from 'react-grid-layout';

import DashboardCard from './Components/DashboardCard'
import DashboardCardContent from './Components/DashboardCardContent'

import Websites from './Data/Websites.json'

class App extends Component {

    render() {
    const websites = Websites.siteGroups.map( (sg, i) =>
    {
    return (
        <DashboardCard
        key={i}
        variant={"outlined"}
        content={
            <DashboardCardContent
                sites={sg.sites}
                title={sg.title}
                color={"textSecondary"}
            />
            }
        />
    )
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {websites}
      </div>
    );
  }
}

export default App;
