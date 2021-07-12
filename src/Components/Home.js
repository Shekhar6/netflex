import React, { Component } from 'react'
import { Route, Switch,NavLink } from 'react-router-dom';
import Card from './Card';
import MovieView from './MovieView';
 
export default class Home extends Component {
    render() {        
        const rend = this.props.movies.map( t => {
            return<NavLink exact to={`/${t.title}`}><Card movie={t} key={t.title}/></NavLink> 
          })
        return (
            <div>
                <div className="container-card">
                    {rend}
                </div>

               
            </div>
           
        )
    }
}
