import React, { useState } from 'react';
import { View, TextInput, Button, AppState, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/userSlice';
import { AppDispatch, RootState } from '../store/store';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const token = useSelector((state: RootState) => state.users.token);

    const handleLogin = () => {
        dispatch(login({username: username, password: password}))
    };

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
        </View>
    );
};

export default LoginScreen;
