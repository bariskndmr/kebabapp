import React, {useState} from 'react';
import { Alert, SafeAreaView } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [surName, setSurName] = useState(null);   
    const [age, setAge] = useState(null);
    const [email, setEmail] = useState(null);

    const handleSubmit = () => {
        if (!name || !surName || !age || !email){
            Alert.alert('Kebab Fitness Salonu', 'Bilgiler boş bırakılamaz');
            return;
        }

        const user = {
            name,
            surName,
            age,
            email
        };
        navigation.navigate('MemberResultScreen');
    }

    return (
        <SafeAreaView>
            <Input onChangeText={setName} placeholder="Üye İsim giriniz..." label='Üye İsim' />
            <Input onChangeText={setSurName} placeholder="Üye Soyisim giriniz..." label='Üye Soyisim' />
            <Input onChangeText={setAge} placeholder="Üye Yaş giriniz..." label='Üye Yaş' />
            <Input onChangeText={setEmail} placeholder="Üye e-posta giriniz..." label='Üye E-Posta' />
            <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
        </SafeAreaView>
    );
}

export default MemberSign;