import React from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { makeRequest } from '../utils/makeRequest';

class SignUpForm extends React.Component {
  state = { phone: '' };

  handleSubmit = async () => {
    const { phone } = this.state;
    try {
      const user = await makeRequest('createUser', 'POST', { phone });
      const pass = await makeRequest('requestOneTimePassword', 'POST', { phone });
      console.log('user:', user, 'pass:', pass);
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
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;
