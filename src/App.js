import React, { Component } from 'react';
import IssueChart from './issue-chart';
import filteredData from './filter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IssueChart data={filteredData} />
      </div>
    );
  }
}

export default App;
