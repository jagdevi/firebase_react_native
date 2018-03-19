import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

type props = {};
export default class CardSection extends Component<Props> {

    constructor(props){
        super(props)
        this.props = props
    }
    render(){

        return(
            <View style={style.containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

const style = StyleSheet.create({
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    }
});