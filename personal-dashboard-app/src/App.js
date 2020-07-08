import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import RGL, { WidthProvider } from "react-grid-layout";
const ReactGridLayout = WidthProvider(RGL);

import DashboardCard from './Components/DashboardCard'
import DashboardCardContent from './Components/DashboardCardContent'

//load the example file if a user hasn't provided their own Applications.json file
let Applications;
try {
  Applications = require('./Data/Applications.json');
} catch (ex) {
  Applications = require('./Data/Examples/Applications-example.json');
}
//load the example file if a user hasn't provided their own Websites.json file
let Websites;
try {
  Websites = require('./Data/Websites.json');
} catch (ex) {
  Websites = require('./Data/Examples/Websites-example.json');
}


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
    const applications = Applications.appGroups.map( (ag, i) =>
    {
        return (
            <DashboardCard
                key={i}
                variant={"outlined"}
                content={
                    <DashboardCardContent
                        title={ag.title}
                        color={"textSecondary"}
                        apps={ag.apps}
                    />
                }
            />
        )
    })

    const layout = [
      {i: "sites", x: 0, y: 0, w: 4, h: 2, minW: 1, maxW: 12},
      {i: "apps", x: 4, y: 0, w: 4, h: 2, minW: 1, maxW: 12}
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
        <ReactGridLayout  layout={layout} cols={12} rowHeight={30} width={1200} draggableHandle={".cardHandle"}>
          <div key="sites">
            {websites}
          </div>
          <div key="apps"> 
              {applications}
          </div>
        </ReactGridLayout>
        
      </div>
    );
  }
}

export default App;
