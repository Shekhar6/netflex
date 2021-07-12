import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

export default class MovieView extends Component {
    render() {
        //console.log(this.props.popularMovies);

        const {backdrop_path,original_title,overview,release_date,vote_average} =this.props.popularMovies;

        return (
            <Card style={{height:'auto',marginLeft:'50%', transform:'translateX(-50%)'}}>
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} style={{display:'block', marginLeft:'auto',marginRight:'auto',width:'100%'}}/>
                <Typography style={{textAlign:'left'}}>
                
                <h1>{original_title}</h1>
                <span >
                <span style={{textDecoration:'solid'}}>Overview:</span>
                <p>{overview}</p>
                </span>
                
                <p>Release Date : {release_date}</p>
                <p>ImDb Rating: <span style={ vote_average > 5 ? {color:'green'} : {color:'red'} }>{vote_average}</span> </p>

                </Typography>
                
            </Card>
        )
    }
}
