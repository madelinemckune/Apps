import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // create an empty array of album objects
  state = {
    albums: []
  };

  componentWillMount() {
    // go to the url and retrieve the response
    // then set the state of the albums array to the response.data
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    //for every album, create an albumDetaik component
    return this.state.albums.map(album => (
      <AlbumDetail key={album.title} album={album} />
    ));
  }

  render() {
    console.log(this.state);
    // inside the ScrollView, render the components
    return <ScrollView>{this.renderAlbums()}</ScrollView>;
  }
}

export default AlbumList;
