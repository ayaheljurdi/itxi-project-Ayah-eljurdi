
import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import _ from 'lodash';
import music from '../images/music.jpeg';
import { Rating, RatingView } from 'react-simple-star-rating';
import {
  getalbums,
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMoreArtists
} from '../actions/result';
import AlbumsList from './AlbumsList';

const ArtistsList = ({artists,props}) => {
  const [rating, setRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('albums');
  const handleRating = (rate) => {
    var starrate=(rate*5)/100;
    setRating(starrate)
    // displaying the popularity with stars
  }
 
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (searchTerm) => {
   
      setIsLoading(true);
     getalbums(searchTerm);
        setIsLoading(false);
        setSelectedCategory('albums');
      }


     
  const  handleInputChange = value =>() => {
    const searchTerm = value;
console.log(searchTerm);
    alert("the artists you choose is "+ searchTerm)
    setSearchTerm(searchTerm);
  
//handleSearch();

  };
  
  
 
  
  return (
    <React.Fragment>
      {Object.keys(artists).length > 0 && (
        <div className="artists">
          {artists.items.map((artist, index) => {
            return (
              <React.Fragment key={index}>
                <Card style={{ width: '18rem' }}>
                  <a
                    target="_blank"
                    value={index}
                    
                    rel="noopener noreferrer"
                    className="card-image-link"
                  >
                  
                     {!_.isEmpty(artist.images) ? (
                      <Card.Img
                        variant="top"
                        src={artist.images[0].url}
                        alt=""
                      />
                    ) : (
                      <img src={music} alt="" />
                    )}
                  </a>
                 
                  <Card.Body   variant="info" type="submit" value={artist.name} onClick={handleInputChange(artist.name)}  >
                  
                   <div>
                    <Card.Title>{artist.name}</Card.Title>
                    <Card.Subtitle>{artist.followers.total} followers</Card.Subtitle>
                    <div >
                      <Rating onClick={handleRating} ratingValue={(artist.popularity*5)/100} /* Rating Props */ />
                    </div>
                    </div>
                
                                         </Card.Body >
                        
                </Card>
              </React.Fragment>
            );
          })}
           
        </div>
      )}
      
    </React.Fragment>
  );
};

export default ArtistsList;
