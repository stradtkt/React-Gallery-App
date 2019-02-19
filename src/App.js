import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from 'axios';
import './css/index.css';
import apiKey from './config';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Loading from './components/Loading';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pics: [],
      loading: false
    };
  }
  searchFlickr = (query) => {
    this.setState({loading: true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${query}&per_page=32&format=json&nojsoncallback=1`)
        .then(response => {
          this.setState({
            pics: response.data.photos.photo,
            loading: false,
            searchText: query
          });
        })
        .catch(error => {
          console.log("Error fetching the photos: ", error);
        });
  }
  render(props) {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Route path="/" render={() => <Navigation onSearch={this.searchFlickr}/>}/>
              <Switch>
                <Route exact path="/search" render={({history}) => <Search onSearch={this.searchFlickr} history={history}/>}/>
                {(this.state.loading) ?
                <Route path="/" component={Loading}/> :
                <Route path="/search/:name" render={({match}) => <PhotoContainer searchText={this.state.searchText} data={this.state.pics} match={{match}}/>}/>}
                <Route component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
