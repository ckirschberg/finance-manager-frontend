import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EntryList from './pages/EntryList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EntryEdit from './pages/EntryEdit';
import EntryDelete from './pages/EntryDelete';

export default function App() {
  type RootStackParamList = {
    EntryList: undefined;
    EntryEdit: { entryId: number };
    EntryDelete: { entryId: number };
  };

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        <Stack.Navigator initialRouteName="EntryList">
          <Stack.Screen name="EntryList" component={EntryList} />
          <Stack.Screen name="EntryEdit" component={EntryEdit} />
          <Stack.Screen name="EntryDelete" component={EntryDelete} />
        </Stack.Navigator>

        {/* <Text>Open up App.js to start working on your app!</Text>
        <EntryList />
        <StatusBar style="auto" /> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
