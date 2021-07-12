import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Card from './Card';

export default class Movies extends Component {

    componentDidMount(){
        this.props.getMovies();
       
    }
    render() {        
        const rend = this.props.movie.map( t => {
            return <NavLink to={`/${t.title}`}  ><Card onClick={() => this.props.value = false} movie={t} key={t.title}/></NavLink>
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
