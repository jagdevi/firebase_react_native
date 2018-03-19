import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

type props = {} ;
export default class Header extends Component <props>
{
    constructor(props){
        super(props)
        this.props = props
    }

    render()
    {
        const {headerComponentStyle, textStyle} = style;
        
        return(
            <View style={headerComponentStyle}>
                <Text style={textStyle}>{this.props.headerTitle}</Text>
            </View>
        );
    }

}

const screenWidth = Dimensions.get('window').width;
const style = StyleSheet.create({
    headerComponentStyle:{
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        alignItems: 'center',
        width: screenWidth,
    },
    textStyle:{
        fontSize: 20,
        color: 'black',
        margin: 5
    }

});