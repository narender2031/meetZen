import React from 'react';
import {Button, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import CustomPaperProvider from './paperTheme/CustomPaperProvider';

export const App = () => {
  return (
    <CustomPaperProvider>
      <SafeAreaView>
        <NavigationContainer>
          <Text>Hello</Text>
          <Button icon={'facebook'}>Hello</Button>
        </NavigationContainer>
      </SafeAreaView>
    </CustomPaperProvider>
  );
};

export default App;
