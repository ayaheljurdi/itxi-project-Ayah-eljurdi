import React from 'react';
import _ from 'lodash';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import ArtistsList from './ArtistsList';
import AlbumsList from './AlbumsList';

const SearchResultalbum = (props) => {
  const {
    isValidSession,
    loadMore,
    result,
    setCategory,
    selectedCategory
  } = props;
  const { albums } = result;
console.log(result);
  

  return (
    <React.Fragment>
      <div className="search-buttons">
     
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === 'albums' ? 'btn active' : 'btn'
            }`}
            onClick={() => setCategory('albums')}
          >
            Artists
          </button>
        )}
     
      </div>
     
      <div className={`${selectedCategory === 'albums' ? '' : 'hide'}`} >
        {albums && <AlbumsList albums={albums} props={albums} />}

      </div>
      
      {!_.isEmpty(result[selectedCategory]) &&
        !_.isEmpty(result[selectedCategory].next) && (
          <div className="load-more" onClick={() => loadMore(selectedCategory)}>
            <Button variant="info" type="button">
              Load More
            </Button>
          </div>
        )}
    </React.Fragment>
  );
};

export default SearchResultalbum;
