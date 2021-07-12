import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

export default class ShowView extends Component {

    componentDidMount(){
        this.props.value()
    }
    
    render() {
        console.log(this.props.popularMovies);
        console.log(this.props.value)

        const {backdrop_path,name,title,overview,first_air_date,vote_average} =this.props.popularMovies;

        return (
            <Card style={{height:'auto',marginLeft:'50%', transform:'translateX(-50%)'}}>
                <img src={`https://image.tmdb.org/t/p/original${backdrop_path}`} style={{display:'block', marginLeft:'auto',marginRight:'auto',width:'100%'}}/>
               <Typography style={{textAlign:'left'}}>
                {name != null ? <h1>{name}</h1> : <h1>{title}</h1> }
               
                <span>
                Overview:
                <p>{overview}</p>
                </span>
                
                <p>Release Date : {first_air_date}</p>
                <p>ImDb Rating: {vote_average}</p> 
                
                </Typography> 
                
            </Card>
        )
    }
    
}
