import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import { ActivityIndicator } from 'react-native';

import TabNavigator from './src/navigation/TabNavigator';
import { SocketProvider } from './src/context/context';

const App = () => {

  const [dataLoaded] = Font.useFonts({
    'bold': require('./src/assets/fonts/Roboto/RobotoCondensed-Bold.ttf'),
    'regular': require('./src/assets/fonts/Roboto/RobotoCondensed-Regular.ttf'),
    'italic': require('./src/assets/fonts/Roboto/RobotoCondensed-Italic.ttf'),
    'medium': require('./src/assets/fonts/Roboto/RobotoCondensed-BoldItalic.ttf'),
    'light': require('./src/assets/fonts/Roboto/RobotoCondensed-Light.ttf'),
  })
  
  if(!dataLoaded){
    return(
      <ActivityIndicator animating={true}/>
    )
  }

  return (
    <SocketProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
      <StatusBar style='auto'/>
    </SocketProvider>
  )
}

export default App

