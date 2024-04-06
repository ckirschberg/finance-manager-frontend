import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { RootStackParamList } from './MainNavigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import { logout, setToken, signup } from '../store/userSlice';
import * as SecureStore from 'expo-secure-store';

type Props = NativeStackScreenProps<RootStackParamList>

const SignupScreen = (props: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSignup = () => {
        // Perform signup logic here
        dispatch(signup({username: username, password: password}))
        // console.log('Signing up with username:', username, 'and password:', password);
    };

    useEffect(() => {
        async function load() {
            const token = await SecureStore.getItemAsync('token');
            console.log("read token from SecureStore", token);

            dispatch(setToken(token || ''))
        }
        load()
    }, [])

    return (
        <View>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Sign Up" onPress={handleSignup} />
            <Button title="Go to Login" onPress={() => props.navigation.navigate("AuthLogin")} />
        </View>
    );
};

export default SignupScreen;
