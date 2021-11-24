import React from 'react';
import { StyleSheet, SafeAreaView, Text} from 'react-native';
import Button from '../components/Button';

const Welcome = ({navigation}) => {

    const goToMemberSign = () => {
        navigation.navigate('MemberSignScreen');
    }

    return (
        <SafeAreaView style={Styles.container}>
            <Text style={Styles.text}>Kebab Fitness Salonu</Text>
            <Button text="Üye Kaydı Oluştur" onPress={goToMemberSign}/>
        </SafeAreaView>
    );
}

export default Welcome;

const Styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems : 'center',
    },
    text : {
        fontSize : 40,
    }
})
