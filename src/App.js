import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
import { Route,  Switch } from 'react-router-dom';
import Home from './Components/Home';
import Tvshows from './Components/TvShows';
import NewPopular from './Components/Popular';
import Movies from './Components/Movies';
import Header from './Components/header';
import ShowView from './Components/ShowView';
import './Components/Netflex.css';
import MovieView from './Components/MovieView';


const API_KEY = "3aae812026f46e299a173c37b8baf674";

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      popularMovies: [ ],
      tvshows: [],
      newlyAdded: [0],
      searched: [],
      isActive : false
    }
    this.getTvShows =this.getTvShows.bind(this);
    this.getMovies = this.getMovies.bind(this);
    this.handleSearch =this.handleSearch.bind(this);
  }

  async componentDidMount(){
    
      const {data} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);

     // console.log(data.results);
      this.setState({
        popularMovies: [...data.results],
        isActive : false
      })
  }
  async  getTvShows() {
    const {data} = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=3aae812026f46e299a173c37b8baf674&language=en-US&page=1");
    console.log(data.results);

    this.setState({
      tvshows: [...data.results]
    })
  }
  async getMovies(){
    const {data} = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=3aae812026f46e299a173c37b8baf674&language=en-US&page=1");
      console.log(data)
    this.setState({
      newlyAdded: [...data.results]
    }) 
  }
 async handleSearch(val) {
      const {data} =await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=3aae812026f46e299a173c37b8baf674&language=en-US&query=${val}&page=1&include_adult=false`);
      console.log(data);

      this.setState({
        popularMovies: [...data.results]
      })
}
handleState = () => {
  this.setState({
    isActive : true
  })
}
  render() {

    const rend =this.state.popularMovies.map(t => {
      return <Route path= {`/${t.title}`} render={routeProps => (<ShowView popularMovies={t} value ={this.handleState} /> )} />
    });
    const rend2 =this.state.tvshows.map(t => {
      console.log(t)
      return <Route path= {`/${t.name}`} render={routeProps => (<ShowView popularMovies={t}  value ={this.handleState} /> )} />
    });
    const rend3 =this.state.newlyAdded.map(t => {
      return <Route path= {`/${t.title}`} render={routeProps => (<MovieView popularMovies={t}  value ={this.handleState} /> )} />
    });
    return (
      <div>
        
        <Navbar handleSearch = {this.handleSearch} searched={this.state.searched}/>       
        { this.state.isActive == true ? "" : <Header popularMovies={this.state.popularMovies}/>   } 
      <Switch>      
        <Route strict exact path="/tvshows" render={routeProps => (<Tvshows value={this.state.isActive} getTvShows={this.getTvShows} tv={this.state.tvshows}  {...routeProps}/>)}></Route>
        <Route strict exact path="/movies" render={routeProps => (<Movies value={this.state.isActive} getMovies={this.getMovies} movie ={this.state.newlyAdded} {...routeProps}/>)}></Route>
        <Route strict exact path="/new" component={NewPopular} ></Route>
        <Route  exact path="/" render={routeProps => (<Home value={this.state.isActive} movies={this.state.popularMovies} {...routeProps} />)}></Route>  
        {rend}
        {rend2}
        {rend3}
      </Switch>
      
      </div>
    )
  }
}

export default App;
