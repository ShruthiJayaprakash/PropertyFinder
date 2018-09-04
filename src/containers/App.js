import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import '../App.css';
import '../index.css';
import TripSorterContainer from './TripSorterContainer';
// import WebRouter from '../Router';

export default class App extends React.Component {
  render() {
    return (
      <div> 
        <TripSorterContainer />
      </div>
    );
  }
}
