import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import { BuyButton, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  };

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return (
      <BuyButton onPress={this.onButtonPress.bind(this)}>Log In</BuyButton>
    );
  }

  onButtonPress() {
    const { email, password } = this.state;
    //reset error message
    this.setState({ error: '', loading: true });
    //returns a promise
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    console.log('here');
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    console.log('sdfdsf');
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            secureTextEntry={false}
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={text => this.setState({ email: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password (6 min)"
            autoCorrect={false}
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
