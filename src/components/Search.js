import React, {Component} from 'react';

class Search extends Component {
    state = {
        searchText: ''
    }
    onSearchChange(e) {
        this.setState({searchText: e.target.value});
    }
    handleSubmit(e, props) {
        e.preventDefault();
        this.props.onSearch(this.state.searchText);
        let path = `search/${this.state.searchText}`;
        this.props.history.push(path);
        e.currentTarget.reset();
    }
    render(props) {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="search" ref={(input) => this.searchString = input} onChange={this.onSearchChange} name="search" placeholder="Search Flickr For Photos" required/>
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
        );
    }
}

export default Search;