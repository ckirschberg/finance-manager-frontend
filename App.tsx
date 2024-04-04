
import { StyleSheet, Text, View } from 'react-native';
import { store } from './store/store'
import { Provider } from 'react-redux'
import MainNavigation from './screens/MainNavigation';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
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
