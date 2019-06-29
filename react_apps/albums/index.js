// import a library to help create a component
import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// attempt to create an component
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums!'} />
      <AlbumList />
    </View>
  );
};

// render it to the device
// must be the name of the project
AppRegistry.registerComponent('albums', () => App);
