import React, { Component } from 'react'
import {View,Text, Button} from 'react-native'
import Card from './Card'
import CardSection from './CardSection'
import { Actions } from 'react-native-router-flux'

export default class LogOut extends Component{
    
    render(){
        return(
            <Card>
                <View>
                    <Text>Logout</Text>
                    <Text>Logout</Text>
                    <Text>Logout</Text>
                    <Text>Logout</Text>
                    <Text>Logout</Text>
                    <Text>Logout</Text>
                    <Text>Logout</Text>
                    <Text>Logout</Text>
                    <Text>Logout</Text>
                </View>
                <View>
                    <Button 
                        title="Go to"
                        onPress={this.btnPress.bind()}
                        />
                </View>
            </Card>
        )
    }

    btnPress()
    {
        Actions.user();
    }
}
