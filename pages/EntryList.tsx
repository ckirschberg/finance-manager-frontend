import { RouteProp } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';

type RootStackParamList = {
    Home: undefined;
    EntryEdit: { entryId: number };
    EntryDelete: { entryId: number };
  };

type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'EntryEdit'>;

type Props = {
  navigation: DetailsScreenNavigationProp;
};

const Item = ({ amount }: { amount: number }) => (
      <Text>{amount.toString()}</Text>
  );

const EntryList: React.FC<Props> = ({navigation}) => {
    const [entries, setEntries] = useState([]);

    const baseUrl = 'http://127.0.0.1:3000'
    const fetchEntries = async () => {
    try {
        const response = await axios.get(baseUrl + '/entry');
        console.log(response.data); // Process the response data as needed
        setEntries(response.data);
    } catch (error) {
        console.error('Error fetching entries:', error);
    }
    };

    useEffect(() => {
        fetchEntries();
    }, [])

    const renderItem = ({ item }: { item: any }) => <Item amount={item.amount} />;

    return (
        <View>
            <Text>Entry-list</Text>
            <FlatList
                data={entries}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                />
            <Button onPress={() => navigation.navigate('EntryEdit', {entryId: 1 /*test*/})} title="Go edit"/>
        </View>
    );
};

export default EntryList;
