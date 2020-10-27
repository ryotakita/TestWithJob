import * as React from 'react';
import { StyleSheet, Platform, Button } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  if(Platform.OS == "ios"){
    return (
      <View style={styles.container}>
        <Text style={styles.title}>IOS</Text>
      </View>
    )
  }
  else{
    return (
      <View style={styles.container}>
        <Text style={styles.title}>IOSじゃない</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 10,
    fontWeight: "normal",
    color: "#f0f"
  },
  separator: {
    marginVertical: 30,
    height: 3,
    width: '80%',
  },
});
