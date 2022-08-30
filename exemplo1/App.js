import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import snorlaxImg from './assets/img/snorlax.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image
          source={{
            uri: snorlaxImg,
          }}
          style={{ width: 200, height: 210, alignSelf: "center" }}
        />
      <StatusBar style="auto" />      
    </View>
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
