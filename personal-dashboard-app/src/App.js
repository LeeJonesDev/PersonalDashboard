import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import GridLayout from 'react-grid-layout';
import makeStyles from '@material-ui/core/styles/makeStyles'
import DashboardCard from './Components/DashboardCard'
import LinkCardContent from './Components/LinkCardContent'

class App extends Component {
 
  render() {
    const classes = makeStyles({
      root: {
        minWidth: 275,
        maxWidth: 750
      },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      title: {
        fontSize: 14,
      },
      pos: {
        marginBottom: 12,
      },
    });

    const sites = [
      {text:"google.com", url:"http://google.com", description: "this is a link to google."},
      {text:"google.com", url:"http://google.com"},
      {text:"google.com", url:"http://google.com"}
    ]

    const cardContent = <LinkCardContent 
      sites={sites} 
      title={"LInks Title"} 
      classes={classes}
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
          className={classes.root} 
          variant={"outlined"} 
          content={cardContent}
        />
      </div>
    );
  }
}

export default App;
