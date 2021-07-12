import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './Card.css';

export default class header extends Component {
    render() {
        const rend = this.props.popularMovies.map(t => (
            <div className="header">
              <img width="50px" src={`https://image.tmdb.org/t/p/original${t.backdrop_path}`}/>
            </div>
          ))
        return (
            <Carousel infiniteLoop={true} useKeyboardArrows autoPlay showThumbs={false} showIndicators={true} showStatus={false}>
                {rend}
            </Carousel>
            
        )
    }
}
