import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import DashboardCard from './Components/DashboardCard';
import DashboardCardContent from './Components/DashboardCardContent';
import {getLayoutsFromLocalStorage, saveLayoutsFromLocalStorage} from './Utility/LocalStorageUtility';

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

//prime saved layouts from localstorage when loading the app
const originalLayouts = getLayoutsFromLocalStorage("card-layouts") || {};

class App extends Component {
  static defaultProps = {
    className: "layout",
    rowHeight: 1, //we set this at 1 so we can calculate our card heights after render 
    rowMargin: 10,
    cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
    breakpoints:{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
    cardHeights: []
  };

  constructor(props){
    super(props);
    this.state = {
      layouts: JSON.parse(JSON.stringify(originalLayouts)),
      currentBreakpoint: "lg",
      compactType: "vertical",
      mounted: false,
      cardHeights: []
    }
    this.resetLayout = this.resetLayout.bind(this);
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.updateCardHeights = this.updateCardHeights.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
  }

   componentDidMount(){
    this.updateCardHeights();
    this.setState({ mounted: true });
  }
  
  updateCardHeights(){
    let cardHeights = [];   

    const wrappers = [].slice.call(document.getElementsByClassName("dashboard-card-wrapper"));
    
    wrappers.forEach((wrapper, i) => {    
      const card = wrapper.getElementsByClassName("dashboard-card");
      cardHeights[i] = card[0].offsetHeight / this.props.rowMargin; //heights are normally elemHeight * rowHeight * margin
    });
    this.setState({cardHeights: cardHeights});
  }
  
  onBreakpointChange = (breakpoint) => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  resetLayout() {
    this.setState({ layouts: {} });
  }
  
  onLayoutChange(layout, layouts) {
    saveLayoutsFromLocalStorage("card-layouts", layouts);
    this.setState({ layouts });
  }

  getDataGridElementProperties(index){
    const colNum = this.props.cols[this.state.currentBreakpoint]
    const width = 2.25;
    const x = (Math.floor(index % Math.floor(colNum / width)) * width); //TODO: something about this gets off when cards move, try = someState || formula?
    const y = 0;
    const h = this.state.cardHeights[index] || 1;

    return { w: width, h: h, x: x, y: y}
  }

  render() {
    let dataGridIndex = 0;
    const websites = Websites.siteGroups.map( (sg, i) =>
    {
      const dataGrid = this.getDataGridElementProperties(dataGridIndex);
      
      return (
        <div
          key={dataGridIndex++}
          data-grid={dataGrid}
          className={"dashboard-card-wrapper"}
          >  
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
        const dataGrid = this.getDataGridElementProperties(dataGridIndex);

        return (
            <div
              key={dataGridIndex++}
              data-grid={dataGrid}
              className={"dashboard-card-wrapper"}
            >  
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
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} (
          {this.props.cols[this.state.currentBreakpoint]} columns)
        </div>
        <button onClick={() => this.resetLayout()}>Reset Layout</button>
        <ResponsiveReactGridLayout
          {...this.props}  
          layouts={this.state.layouts}           
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          useCSSTransforms={this.state.mounted}
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
