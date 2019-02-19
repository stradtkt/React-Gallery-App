import React from 'react';
import Photos from './Photos';

const PhotoContainer = (props) => {
    const results = props.data;
    let pics = results.map(pic =>
        <Photos url={`https://farm${pic.farm}.staticflicker.com/${pic.server}/${pic.id}_${pic.secret}.jpg`} id={pic.id} key={pic.id} title={pic.title}/>
    );
    let numberOfPics = pics.length;

    return (
      <div className="photo-container">
          {(numberOfPics === 0) ?
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>Your search did not come up with any results, please try again.</p>
            </li> :
              <h2>{`Showing ${numberOfPics} results for ${props.searchText}`}</h2>}
              <ul>
                  {pics}
              </ul>
          }
      </div>
    )
}

export default PhotoContainer;