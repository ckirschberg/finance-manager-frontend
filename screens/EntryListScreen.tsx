import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const EntryListScreen = () => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>Welcome to the EntryListScreen!</Text>
            <Button title="Go to Edit" onPress={() => navigation.dispatch(CommonActions.navigate({name: "EntryEdit", params: { entryId: 1 /*test*/ }}))} />
        </View>
    );
};

export default EntryListScreen;
