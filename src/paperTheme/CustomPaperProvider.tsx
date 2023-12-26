import * as React from 'react';
import {PaperProvider} from 'react-native-paper';
import paperSettings from './paperSettings';
import {getCurrentThemeId} from './theme';

type TCustomPaperProviderProps = {children: React.ReactNode};

const CustomPaperProvider = (props: TCustomPaperProviderProps) => {
  const currentTheme = getCurrentThemeId();

  return (
    <PaperProvider settings={paperSettings} {...props} theme={currentTheme} />
  );
};

export default CustomPaperProvider;
