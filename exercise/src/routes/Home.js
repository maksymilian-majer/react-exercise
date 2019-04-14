import React, { Component } from 'react';

import TopBar from '../components/TopBar';
import HomeContent from '../components/HomeContent';

export class Home extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <HomeContent/>
      </div>
    );
  }
}

export default Home;