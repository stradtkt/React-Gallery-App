import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './css/index.css';
import apiKey from './config';
import Header from './components/Header';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';


class App extends Component {
  state = {loading:false, search: ''};
  defaultSearch = 'spiders';
  fetchData = (search) => {
    const base = "https://api.flickr.com/services/rest/";
    const url_params = `method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
    const search_url = `${base}?${url_params}`;
    this.setState({loading:true});
    fetch(search_url)
        .then(response => response.json())
        .then(data => this.parseResponse(data))
        .then(items => this.setState({items:items, search:search, loading:false}));
  }
  parseResponse(data) {
    return data.photos.photo.map((item) => {
      const src = `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`
      return {
        id: item.id,
        src: src
      }
    });
  }
  render(props) {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Header/>
            <Switch>
              <Route exact path="/" render={() => <Redirect to={`/search/${this.defaultSearch}`}/>}/>
              <Route path="/search/:topic" render={() => <PhotoContainer state={this.state} fetchData={this.fetchData}/>}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
