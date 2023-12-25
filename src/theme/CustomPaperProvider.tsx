import * as React from 'react';
import {PaperProvider} from 'react-native-paper';
import paperSettings from './paperSettings';

type TCustomPaperProviderProps = {children: React.ReactNode};

const CustomPaperProvider = (props: TCustomPaperProviderProps) => {
  return <PaperProvider settings={paperSettings} {...props} />;
};

export default CustomPaperProvider;
