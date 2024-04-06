import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, AppState, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';
import { AppDispatch, RootState } from '../store/store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
// import * as SecureStore from 'expo-secure-store';

type Props = NativeStackScreenProps<RootStackParamList>

const LoginScreen = (props: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const token = useSelector((state: RootState) => state.users.token);

    const handleLogin = () => {
        dispatch(login({username: username, password: password}))
    };

    // useEffect(() => {
    //     console.log("token is now", token);
    //     SecureStore.setItemAsync('token', token || '');
    // }, [token])

    return (
        <View>
            <Text>{token}</Text>
            <TextInput
                placeholder="Username"
                value={username}
                autoCapitalize="none"
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Go to Signup" onPress={() => props.navigation.navigate("AuthSignup")} />
        </View>
    );
};

export default LoginScreen;
