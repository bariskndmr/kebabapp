import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const MemberResult = ({route}) => {
    const {user} = route.params;

    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.title}>Kayıt Başarılı!</Text>
            <Text style={Styles.text}>Üye İsim: {user.name}</Text>
            <Text style={Styles.text}>Üye Soyisim: {user.surName}</Text>
            <Text style={Styles.text}>Üye Yaş {user.age}</Text>
            <Text style={Styles.text}>Üye E-Posta {user.email}</Text>
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    container : {

    },
    title: {
        margin: 10,
        fontWeight : 'bold',
        fontSize : 30,
    },  
    text : {
        fontWeight : '500',
        fontSize : 20,
        margin: 5,
    }
});

export default MemberResult;