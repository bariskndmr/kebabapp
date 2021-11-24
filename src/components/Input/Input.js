import React from 'react';
import { Text, View, TextInput } from 'react-native';
import Styles from './Input.style';

const Input = ({label, placeholder}) => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.label}>{label}</Text>
            <TextInput placeholder={placeholder} style={Styles.input} />
        </View>
    ); 
}

export default Input;