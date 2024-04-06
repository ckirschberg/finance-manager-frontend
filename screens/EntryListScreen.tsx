import { CommonActions, useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button } from 'react-native';
import { RootStackParamList } from './MainNavigation';

type Props = NativeStackScreenProps<RootStackParamList, "EntryList">

const EntryListScreen = (props: Props) => {

    return (
        <View>
            <Text>Welcome to the EntryListScreen!</Text>
            <Button title="Go to Edit" onPress={() => props.navigation.navigate("EntryEdit", { entryId: 1 })} />
            {/* <Button title="Go to Edit" onPress={() => navigation.dispatch(CommonActions.navigate({name: "EntryEdit", params: { entryId: 1 }}))} /> */}
        </View>
    );
};

export default EntryListScreen;
