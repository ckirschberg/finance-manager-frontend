import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SignupScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        // Perform signup logic here
        console.log('Signing up with username:', username, 'and password:', password);
    };

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
        </View>
    );
};

export default SignupScreen;
