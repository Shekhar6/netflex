import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';
import './Netflex.css';

export default class TvShows extends Component {
    componentDidMount(){
        this.props.getTvShows()
    }
    render() {
        const rend = this.props.tv.map( t => {
            return<NavLink to={`/${t.name}`}> <Card movie={t} key={t.title}/> </NavLink> 
          })
        return (
            <div>
               <div className="container-card" >
                {rend}
            </div>
            </div>
        )
    }
}
