import React, { Component } from 'react';
import './Netflex.css'

export default class SearchInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            textChanged : ""
        }

        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState ({
            textChanged: e.target.value
        });
        console.log(this.state.textChanged);
    }
    handleSubmit () {
        let val =this.state.textChanged;
        let newVal="";
        for(let i= 0; i<val.length ; i++ ){
            if(val[i] !== " "){
                newVal+=val[i];
            } else {
                newVal+="%20"
             }
         }
        // console.log(newVal);
         this.props.handleSearch(newVal);
    }
    render() {
        return (
            <div>
                <div  >
                    <input className="search" placeholder="Search Movies" name="textChanged" type="text" onChange ={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Search</button>
                </div>
            </div>
        )
    }
}
