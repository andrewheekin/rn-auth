import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { makeRequest } from '../utils/makeRequest';

class SignInForm extends React.Component {
  state = { phone: '', code: '' };

  handleSubmit = async () => {
    const { phone, code } = this.state;
    try {
      const { token } = await makeRequest('verifyOneTimePassword', 'POST', { phone, code });
      const loggedIn = firebase.auth().signInWithCustomToken(token);
      console.log('token:', token, 'loggedin:', loggedIn)
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone:</FormLabel>
          <FormInput value={this.state.phone} onChangeText={phone => this.setState({ phone })} />
        </View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code:</FormLabel>
          <FormInput value={this.state.code} onChangeText={code => this.setState({ code })} />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;
