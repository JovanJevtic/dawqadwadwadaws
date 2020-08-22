'use strict';

const e = React.createElement;

const CommentSection = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

const domContainer = document.querySelector('#comment-section-react');
ReactDOM.render(e(LikeButton), domContainer);

import React from 'react';
import { Slide } from 'react-slideshow-image';

import '../styles/slider.css';

const slideImages = [
  'https://sc1.musik-produktiv.com/pic-010099412_02xxl/gibson-les-paul-standard-blood-orange-burst.jpg',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zzounds.com%2Fitem--GIBSSHBSTU19&psig=AOvVaw0UErPHfP8ejtAXNNN3JE1F&ust=1591377805795000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjz97jW6OkCFQAAAAAdAAAAABAJ',
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.guitarcenter.com%2FGibson%2FSG-Standard-Electric-Guitar.gc&psig=AOvVaw0UErPHfP8ejtAXNNN3JE1F&ust=1591377805795000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKjz97jW6OkCFQAAAAAdAAAAABAP'
];
 
const properties = {
  duration: 7000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  //onChange: (oldIndex, newIndex) => {
  //  console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  //}
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span>Slide 1</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span>Slide 2</span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;