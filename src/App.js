import React, { Component } from 'react';
import { HeroVideo } from 'react-hero-video';
import CustomHeroVideo from './components/CustomHeroVideo';
import logo from './logo.svg';
import './App.css';

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

        <CustomHeroVideo
          videoId="UBX8MWYel3s"
          subtitle="A video background is so pretentious!"
          title="SLAMFusion"
        >
          <p>
            am a childer
          </p>
        </CustomHeroVideo>
        <div style={{marginTop: "100vh", height: "100vh", backgroundColor: "#0000FF" }}>
          OwO what's this
        </div>
      </div>
    );
  }
}

export default App;
