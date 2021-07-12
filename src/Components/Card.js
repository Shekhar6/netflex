import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './Card.css';

export default class Cardi extends Component {
    render() {
        const {poster_path,backdrop_path,title} =this.props.movie;
       
        return (
            <Card style={{maxWidth:'500px',height:'50vh', marginLeft:'40px',marginBottom:'20px' }}>
                <img src={`https://image.tmdb.org/t/p/w500`+poster_path} alt={title} style={{height:'100%', width:'auto', margin:'auto'}}/>
            </Card>
        )
    }
}
