import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StoreScreen from './screens/StoreScreen';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StoreScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
