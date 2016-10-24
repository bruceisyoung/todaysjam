import exponent from 'exponent';
import React, { Component, PropTypes } from 'react';
import { Form, Image, TextInput, View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: '',
      Password: '',
      id: ''
    };
  }
  render() {
    return (
      <View>
        <Text>SignUp and Jam Out!</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({Username: text1})}
          value={this.state.Username}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text: Password})}
          value={this.state.Password}
        />
        <TouchableOpacity>
          SignUp
        </TouchableOpacity>
        <View>
        <TouchableOpacity>
          <Text> Already have an Account?</Text>
        </TouchableOpacity>          
        </View>
      </View>
    );
  }
}