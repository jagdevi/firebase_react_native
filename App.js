/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import Header from './src/Componentes/Header'
import RouterNavigation from './src/Componentes/RouterNavigation'
import Login from './src/Componentes/LoginUI'
import Firebase from 'firebase'
import Spinner from './src/Componentes/Spinner'
import { Router } from 'react-native-router-flux';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {loggedIn: null}
  componentDidMount(){
    console.disableYellowBox = true;
  }
  componentWillMount(){
      Firebase.initializeApp({
          apiKey: 'AIzaSyD-UUGrp01q4WQ-ugzZrSMcZyI_aBXnq24',
          authDomain: 'react-authentication-c5cd9.firebaseapp.com',
          databaseURL: 'https://react-authentication-c5cd9.firebaseio.com',
          projectId: 'react-authentication-c5cd9',
          storageBucket: 'react-authentication-c5cd9.appspot.com',
          messagingSenderId: '386719428091'
        });
      
      Firebase.auth().onAuthStateChanged((user) => {
          if(user){
            this.setState({loggedIn: true})
          }else{
            this.setState({loggedIn: false})
          }
      });
  }
  render() {
    return (
              // {this.renderLoginContent()}
        // <Header headerTitle= "Login"/>
      <View style={{flex:1}}>
        <RouterNavigation />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
  renderLoginContent(){
    switch(this.state.loggedIn){
      case true:
        return <Login />
          // return <Button title="LogOut" 
          //         onPress= {this.logOutBtnPress.bind(this)}/>
      case false: 
            return <Login />
      default: 
          return <Spinner size='large'/>
    }
  }

  logOutBtnPress(){
      Firebase.auth().signOut();
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
