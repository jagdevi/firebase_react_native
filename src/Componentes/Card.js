import React, { Component } from 'react'
import {View,Text, StyleSheet} from 'react-native'


type prop = {};
export default class Card extends Component<prop> {

    constructor(props){
        super(props)
        this.props = props
    }

    render(){

        return(
            <View style={style.cardComponentStyle}>
                {this.props.children}
            </View>
        );
    }
}

const style = StyleSheet.create({
    cardComponentStyle: {
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 1,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowColor: '#000',
        shadowRadius: 2,
        elevation: 1,
        margin: 5,

    },

});