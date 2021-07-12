import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Netflex.css';
import SearchInput from './/SearchInput';


export default class Navbar extends Component {
    

    render() {
        return (
            <div className="Container">
                <div>
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflex" className="logo"/>
                </div>
                <nav className="navbar">
                    
                        <NavLink exact to="/" className="li">Home</NavLink>
                        <NavLink exact to ="/tvshows" className="li">TvShows</NavLink >
                        <NavLink exact to="/movies" className="li">Movies</NavLink >
                        <NavLink exact to="/new"  className="li">New & Popular</NavLink >                    
                </nav>
                <div style={{display:'flex', justifyContent:'center',flexGrow:'1'}}>
                    <SearchInput handleSearch={this.props.handleSearch} data={this.props.searched}/>
                </div>
            </div>            
            
        )
    }
}
