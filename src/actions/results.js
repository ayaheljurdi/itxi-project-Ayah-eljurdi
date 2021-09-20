import {
  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
 
} from '../utils/constants';
import { get } from '../utils/api';

export const setAlbums = (albums) => ({
  type: SET_ALBUMS,
  albums
});

export const addAlbums = (albums) => ({
  type: ADD_ALBUMS,
  albums
});

export const setArtists = (artists) => ({
  type: SET_ARTISTS,
  artists
});

export const addArtists = (artists) => ({
  type: ADD_ARTISTS,
  artists
});



export const initiateGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,artist`;
      const result = await get(API_URL);
      console.log(result);
      const { albums, artists} = result;
      dispatch(setAlbums(albums));
     return dispatch(setArtists(artists));
      
    } catch (error) {
      console.log('error', error);
    }
  };
};
export const getalbums = (searchTerm) => {
  
  try {
    const API_URL = `https://api.spotify.com/v1/artists/${searchTerm}/albums`;
    const result = get(API_URL);
   
    const { albums } = result;

    console.log(searchTerm)
    return setAlbums(albums);
  } catch (error) {
    console.log('error', error);
  }

};
export const initiateLoadMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addAlbums(result.albums));
    } catch (error) {
      console.log('error', error);
    }
  };
};

export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addArtists(result.artists));
    } catch (error) {
      console.log('error', error);
    }
  };
};


