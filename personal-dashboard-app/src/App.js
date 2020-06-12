import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GridLayout from 'react-grid-layout';

import DashboardCard from './Components/DashboardCard'
import DashboardCardContent from './Components/DashboardCardContent'

import Websites from './Data/Websites.json'
import { GridStyles } from './StyleClasses/GridStyles';

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

    const layout = [
      {i: "sites", x: 0, y: 0, w: 4, h: 2, minW: 1, maxW: 12}
    ]

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <GridLayout className={GridStyles.layout} layout={layout} cols={12} rowHeight={30} width={1200} >
        <div key="sites">
          {websites}
        </div>
        </GridLayout>
        
      </div>
    );
  }
}

export default App;
