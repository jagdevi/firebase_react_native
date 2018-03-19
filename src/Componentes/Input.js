import React, { Component } from 'react'
import {View,Text, StyleSheet, TextInput,Alert, Button} from 'react-native'

const Input = ({label,placeholder,value,onChangeText,secureTextEntry, onFocus}) => {
    const {containerStyle,labelStyle,inputStyle} = style;
    return(
        <View style={containerStyle}>
            <Text style={labelStyle}>{ label }</Text>
            <TextInput
                style={inputStyle}
                secureTextEntry={secureTextEntry}
                placeholder = {placeholder}
                value= {value}
                onChangeText = {onChangeText}
                onFocus = {onFocus}
            />
        </View>
    );
};

const style = {
    containerStyle:{
        height:40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputStyle:{
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        flexWrap: 'wrap',
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex:1,
        
    },
}
export default Input