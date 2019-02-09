import {HeroVideo} from "react-hero-video";
import React from "react";


const CustomHeroVideo = ({videoId, title, subtitle, children}) => (
  <HeroVideo
    videoSrc={`https://www.youtube.com/embed/${videoId}?controls=0&showinfo=0&rel=0&autoplay=1&mute=1&loop=1&playlist=${videoId}`}
    videoSubtitle={subtitle}
    videoTitle={title}
  >
    {children}
  </HeroVideo>
);

export default CustomHeroVideo;