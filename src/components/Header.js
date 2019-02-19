import React from 'react';
import Search from './Search';
import Navigation from "./Navigation";

const Header = () => {
    return (
        <div>
            <h1 className="text-center">
                Flickr Photo Search
            </h1>
            <Search/>
            <Navigation/>
        </div>
    )
}
export default Header;