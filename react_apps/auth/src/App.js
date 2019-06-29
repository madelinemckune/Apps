import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import { Header, BuyButton, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBgnkXGjC5ISSatanEWjSJ0tKL78v7N75U',
      authDomain: 'authentication-58aac.firebaseapp.com',
      databaseURL: 'https://authentication-58aac.firebaseio.com',
      projectId: 'authentication-58aac',
      storageBucket: 'authentication-58aac.appspot.com',
      messagingSenderId: '927792102532',
      appId: '1:927792102532:web:fa81ff15c047223d'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <BuyButton onPress={() => firebase.auth().signOut()}>
              Log Out
            </BuyButton>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication"> </Header>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
