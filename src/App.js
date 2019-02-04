import React, { Component } from 'react';
import CustomHeroVideo from './components/CustomHeroVideo';
import './App.css';
import Cover from "./components/Cover";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div style={{position: "absolute", zIndex: 1, color: "white"}}>*/}
          {/*Hi there!*/}
        {/*</div>*/}
        {/*<div style={{position: "absolute", zIndex: -1}}>*/}
          {/*<YoutubeBackground*/}
            {/*// videoId={"UBX8MWYel3s"}*/}
            {/*overlay={"rgba(0, 0, 0, .8)"}*/}
          {/*>*/}
            {/*<div style={{width: "100vw", height: "100vh"}} />*/}
          {/*</YoutubeBackground>*/}
        {/*</div>*/}

        <CustomHeroVideo videoId="jssO8-5qmag" />
        <Cover />
        <div style={{marginTop: "100vh", height: "100vh"}}>
          OwO what's this
        </div>
      </div>
    );
  }
}

export default App;
