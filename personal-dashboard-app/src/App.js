import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import DashboardCard from './Components/DashboardCard';
import DashboardCardContent from './Components/DashboardCardContent';

//load the example file if a user hasn't provided their own Applications.json file
let Applications;
try {
  Applications = require('./Data/Applications.json');
} catch (ex) {
  Applications = require('./Data/Examples/Applications.json');
}
//load the example file if a user hasn't provided their own Websites.json file
let Websites;
try {
  Websites = require('./Data/Websites.json');
} catch (ex) {
  Websites = require('./Data/Examples/Websites.json');
}

//TODO: below to util class
const originalLayouts = getLayoutsFromLocalStorage("card-layouts") || {};
function getLayoutsFromLocalStorage(key) {
  let localStorage = {};
  if (global.localStorage) {
    try {
      localStorage = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return localStorage[key];
}

function saveLayoutsFromLocalStorage(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}
//TODO: above to util class

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts))
    }
  }

  static get defaultProps() {
    return {
      className: "layout",
      cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
      rowHeight: 150,//TODO: does this do anything?
    };
  }

  resetLayout() {
    this.setState({ layouts: {} });
  }

  onLayoutChange(layout, layouts) {
    saveLayoutsFromLocalStorage("card-layouts", layouts);
    this.setState({ layouts });
  }
  render() {
    let dataGridIndex = 0;
    const websites = Websites.siteGroups.map( (sg, i) =>
    {
      //TODO: heights are overlapping, figure out how to address
      return (
        <div
          key={dataGridIndex}
          data-grid={{ w: 2, h: 1, x: (dataGridIndex++ * 2) % 12, y: 0}}>
          <DashboardCard    
              variant={"outlined"}
              content={
                  <DashboardCardContent
                      sites={sg.sites}
                      title={sg.title}
                      color={"textSecondary"}
                  />
              }
          />        
        </div>
      )
    })
    const applications = Applications.appGroups.map( (ag, i) =>
    {
        //TODO: heights are overlapping, figure out how to address
        return (
            <div
              key={dataGridIndex}
              data-grid={{ w: 2, h: 1, x: (dataGridIndex++ * 2) % 12, y: 0}}>
              <DashboardCard
                  variant={"outlined"}
                  content={
                      <DashboardCardContent
                          title={ag.title}
                          color={"textSecondary"}
                          apps={ag.apps}
                      />
                  }
              />
            </div>
        )
    })

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout  
          layouts={this.state.layouts}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}} 
          onLayoutChange={(layout, layouts) =>
            this.onLayoutChange(layout, layouts)
          }
          draggableHandle={".card-handle"}
          >
            {websites}
            {applications}
        </ResponsiveReactGridLayout>
        
      </div>
    );
  }
}

export default App;
