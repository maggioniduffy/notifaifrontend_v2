import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import io from "socket.io-client";
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { API_URL } from './src/utils/constants';

const App = () => {
  const [noticias, setNoticias] = useState();
  const socket = io(API_URL);

  useEffect(() => {
      socket.on('noticias', (newNoticias) => {
      setNoticias(newNoticias);
    }
  )} , [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {noticias && (
        <FlatList 
          data={noticias}
          renderItem= {renderItem}
          keyExtractor={item => item.id}
          />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const renderItem = (item) =>{
  return(
    <View>
      <Text> {item.title} </Text>
      <Text> {item.link} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
