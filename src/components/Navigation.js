import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navigation extends Component {
    handleClick(e, props) {
        e.preventDefault();
        let clicked = e.target.textContent;
        this.props.onSearch(clicked);
        return clicked;
    }
    render(props) {
        return (
            <nav className="main-nav">
                <ul>
                    <li><NavLink to="/search" onClick={this.handleClick}>Search</NavLink></li>
                    <li><NavLink to="/search/cats" onClick={this.handleClick}>Cats</NavLink></li>
                    <li><NavLink to="/search/dogs" onClick={this.handleClick}>Dogs</NavLink></li>
                    <li><NavLink to="/search/computers" onClick={this.handleClick}>Computers</NavLink></li>
                    <li><NavLink to="/search/clouds" onClick={this.handleClick}>Clouds</NavLink></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;