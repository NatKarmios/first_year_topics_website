import React, { Component } from 'react';
import './App.css';
import CustomHeroVideo from './components/CustomHeroVideo';
import Cover from "./components/Cover";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div>
        <CustomHeroVideo videoId="4so0HmaU-Dc"/>
        <Cover />
        <Content />
      </div>
    );
  }
}

export default App;
