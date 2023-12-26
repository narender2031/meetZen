import React from 'react';
import {Button, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomPaperProvider from './paperTheme/CustomPaperProvider';

export const App = () => {
  return (
    <CustomPaperProvider>
      <SafeAreaView>
        <Text>Hello</Text>
        <Button icon={'facebook'}>Hello</Button>
      </SafeAreaView>
    </CustomPaperProvider>
  );
};

export default App;
