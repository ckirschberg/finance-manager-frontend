import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
    EntryEdit: { entryId: number };
    EntryDelete: { entryId: number };
  };

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EntryEdit'>;

type Props = {
  navigation: DetailsScreenNavigationProp;
};


const EntryList: React.FC<Props> = ({navigation}) => {
    return (
        <View>
            <Text>Entry-list</Text>
            <Button onPress={() => navigation.navigate('EntryEdit', {entryId: 1 /*test*/})} title="Go edit"/>
        </View>
    );
};

export default EntryList;
