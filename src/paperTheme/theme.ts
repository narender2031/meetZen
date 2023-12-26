import {Appearance} from 'react-native';
import {
  MD3LightTheme as PaperLightTheme,
  MD3DarkTheme as PaperDarkTheme,
  MD3Colors as PaperColor,
  MD3Theme as PaperTheme,
} from 'react-native-paper';

export const customColors = PaperColor;

export type CustomTheme = Omit<PaperTheme, 'color'> & {
  colors: PaperTheme['colors'] & {
    warning?: string;
  };
};

export type ThemeId = 'light' | 'dark';

export const lightTheme: CustomTheme = {
  ...PaperLightTheme,
  colors: {
    ...PaperLightTheme.colors,
  },
};

export const darkTheme: CustomTheme = {
  ...PaperDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
  },
};

export const getCurrentThemeId = (): CustomTheme => {
  const theme = Appearance.getColorScheme();

  if (theme === 'dark') {
    return darkTheme;
  } else {
    return lightTheme;
  }
};
