import React, { Component } from 'react'
import {View,Text, StyleSheet, TextInput,Alert, Button} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import Input from './Input'
import Spinner from './Spinner'
import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'

type props = {};
export default class LoginUI extends Component<props> {

    constructor(props){
        super(props)
        this.props = props
    }
    
    state = {emailText:'',
            passwordText:'', loading: false};

    render(){
        const {inputTextStyle,buttonContainerStyle} = style;
        return(
            <Card> 
                <CardSection>
                    <Input
                        label= "Email"
                        value= {this.state.emailText}
                        placeholder = 'abc@yahoo.com'
                        onChangeText = {text => this.setState({emailText:text})}
                        // onFocus = {() => this.setState({emailText: ''})}
                        />
                </CardSection>

                <CardSection>
                    <Input 
                        label= "Password"
                        placeholder = 'Password'
                        secureTextEntry
                        onChangeText = {text => this.setState({passwordText:text})}
                        value = {this.state.passwordText}
                        // onFocus = {() => this.setState({passwordText: ''})}
                        />
                </CardSection>

                <Text style={{fontSize: 20, color: 'red'}}>
                    {this.state.Error}
                </Text>
                
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
    //on login button press replace button to indicatior 
    renderButton(){
        if(this.state.loading){
            return <Spinner size='small' />
        }
        return (
            <View style= {style.buttonContainerStyle}>
                <Button style={{alignSelf: 'center'}}
                    title= 'Log In!!'
                    onPress= {this.btnLoginPress.bind(this,this.state.emailText,
                                            this.state.passwordText)}
                />      
            </View>
        );
    }

    //Login button onclick method
    btnLoginPress(email,pass) {
        this.setState({Error: '',loading: true})
        firebase.auth().signInWithEmailAndPassword(email,pass)
           .then(this.onLoginSuccess.bind(this))
           .catch(() => {
               firebase.auth().createUserWithEmailAndPassword(email,pass)
                   .then(this.onLoginSuccess.bind(this))    
                   .catch(this.onLoginFailure.bind(this));
           });   
   }

   //Login auth failure 
    onLoginFailure(){
        // Alert.alert('Email:' + email+  '\nPassword:' + pass );
        this.setState({ Error: 'Authentication Failed', loading: false });        
    }
    
    
    //Login auth success
    onLoginSuccess(){
        this.setState({
            Error: '',
            loading: false,
            emailText: '',
            passwordText: ''
        })
        // Alert.alert('Successfully Login...')
        Actions.main();
    }
}

//CSS
const style = StyleSheet.create({

    viewContainerStyle:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    inputTextStyle:{
        flex: 1,
        flexWrap: 'wrap',
    },
    buttonContainerStyle: {
        flex: 1,
        alignSelf: 'stretch',
        color: '#007aff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff'
    },

});