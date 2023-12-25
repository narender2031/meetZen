import React from 'react';
import {Button, PaperProvider, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';
import settings from './theme/paperSettings';

export const App = () => {
  return (
    <PaperProvider settings={settings}>
      <SafeAreaView>
        <Text>Hello</Text>
        <Button icon={'facebook'}>Hello</Button>
      </SafeAreaView>
    </PaperProvider>
  );
};

export default App;
