import React, { useEffect, useState } from 'react';
import { View, TextInput, AppState, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, setToken } from '../store/userSlice';
import { AppDispatch, RootState } from '../store/store';
import * as SecureStore from 'expo-secure-store';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './MainNavigation';
import { Box, Button, FormControl, Input, Stack, WarningOutlineIcon } from 'native-base';
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

    useEffect(() => {
        async function readFromSecureStore() {
            const token = await SecureStore.getItemAsync('token');
            token && dispatch(setToken(token))
        }
        readFromSecureStore();
    }, [])



    return (
        <View>
            <Text>{token}</Text>
            <Box alignItems="center">
                <Box w="100%" maxWidth="300px">
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Username</FormControl.Label>
                            <Input type="text" placeholder="Username" value={username} 
                                autoCapitalize="none" onChangeText={setUsername}/>
                        </Stack>
                    </FormControl>
                </Box>

                <Box w="100%" maxWidth="300px">
                    <FormControl isRequired>
                        <Stack mx="4">
                            <FormControl.Label>Password</FormControl.Label>
                            <Input type="password" defaultValue="12345" placeholder="Password" 
                                value={password} onChangeText={setPassword}/>
                            <FormControl.HelperText>
                                Must be atleast 6 characters.
                            </FormControl.HelperText>
                        </Stack>
                    </FormControl>
                </Box>
            </Box>
            
            
            {/* <TextInput
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
            /> */}
            {/* <Button title="Login" onPress={handleLogin} />
            <Button title="Go to Signup" onPress={() => props.navigation.navigate("AuthSignup")} /> */}
            <Box alignItems="center">
                <Button onPress={handleLogin}>Login</Button>
            </Box>
        </View>
    );
};

export default LoginScreen;
