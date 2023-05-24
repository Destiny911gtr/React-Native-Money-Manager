import { MD3LightTheme as lightMD3Theme, MD3DarkTheme as darkMD3Theme } from 'react-native-paper';

export const black = "#000";

export const catppuccin = {
  "base": "#1e1e2e",
  "mantle": "#181825",
  "crust": "#11111b",
  "text": "#cdd6f4",
  "green": "#a6e3a1",
  "sky": "#89dceb"
};

export const darkTheme = {
  ...darkMD3Theme,
  "colors": {
    "primary": "rgb(105, 211, 255)",
    "onPrimary": "rgb(0, 53, 70)",
    "primaryContainer": "rgb(0, 77, 101)",
    "onPrimaryContainer": "rgb(190, 233, 255)",
    "secondary": "rgb(180, 202, 214)",
    "onSecondary": "rgb(31, 51, 61)",
    "secondaryContainer": "rgb(53, 74, 84)",
    "onSecondaryContainer": "rgb(208, 230, 242)",
    "tertiary": "rgb(198, 194, 234)",
    "onTertiary": "rgb(47, 45, 77)",
    "tertiaryContainer": "rgb(69, 67, 100)",
    "onTertiaryContainer": "rgb(227, 223, 255)",
    "error": "rgb(255, 180, 171)",
    "onError": "rgb(105, 0, 5)",
    "errorContainer": "rgb(147, 0, 10)",
    "onErrorContainer": "rgb(255, 180, 171)",
    "background": "rgb(25, 28, 30)",
    "onBackground": "rgb(225, 226, 229)",
    "surface": "rgb(25, 28, 30)",
    "onSurface": "rgb(225, 226, 229)",
    "surfaceVariant": "rgb(64, 72, 76)",
    "onSurfaceVariant": "rgb(192, 200, 205)",
    "outline": "rgb(138, 146, 151)",
    "outlineVariant": "rgb(64, 72, 76)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(225, 226, 229)",
    "inverseOnSurface": "rgb(46, 49, 51)",
    "inversePrimary": "rgb(0, 102, 132)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(29, 37, 41)",
      "level2": "rgb(31, 43, 48)",
      "level3": "rgb(34, 48, 55)",
      "level4": "rgb(35, 50, 57)",
      "level5": "rgb(36, 54, 62)"
    },
    "surfaceDisabled": "rgba(225, 226, 229, 0.12)",
    "onSurfaceDisabled": "rgba(225, 226, 229, 0.38)",
    "backdrop": "rgba(42, 49, 54, 0.4)"
  }
};

export const lightTheme = {
  ...lightMD3Theme,
  "colors": {
    "primary": "rgb(0, 102, 132)",
    "onPrimary": "rgb(255, 255, 255)",
    "primaryContainer": "rgb(190, 233, 255)",
    "onPrimaryContainer": "rgb(0, 31, 42)",
    "secondary": "rgb(77, 97, 108)",
    "onSecondary": "rgb(255, 255, 255)",
    "secondaryContainer": "rgb(208, 230, 242)",
    "onSecondaryContainer": "rgb(8, 30, 39)",
    "tertiary": "rgb(93, 91, 125)",
    "onTertiary": "rgb(255, 255, 255)",
    "tertiaryContainer": "rgb(227, 223, 255)",
    "onTertiaryContainer": "rgb(26, 24, 54)",
    "error": "rgb(186, 26, 26)",
    "onError": "rgb(255, 255, 255)",
    "errorContainer": "rgb(255, 218, 214)",
    "onErrorContainer": "rgb(65, 0, 2)",
    "background": "rgb(251, 252, 254)",
    "onBackground": "rgb(25, 28, 30)",
    "surface": "rgb(251, 252, 254)",
    "onSurface": "rgb(25, 28, 30)",
    "surfaceVariant": "rgb(220, 228, 233)",
    "onSurfaceVariant": "rgb(64, 72, 76)",
    "outline": "rgb(112, 120, 125)",
    "outlineVariant": "rgb(192, 200, 205)",
    "shadow": "rgb(0, 0, 0)",
    "scrim": "rgb(0, 0, 0)",
    "inverseSurface": "rgb(46, 49, 51)",
    "inverseOnSurface": "rgb(240, 241, 243)",
    "inversePrimary": "rgb(105, 211, 255)",
    "elevation": {
      "level0": "transparent",
      "level1": "rgb(238, 245, 248)",
      "level2": "rgb(231, 240, 244)",
      "level3": "rgb(223, 236, 241)",
      "level4": "rgb(221, 234, 239)",
      "level5": "rgb(216, 231, 237)"
    },
    "surfaceDisabled": "rgba(25, 28, 30, 0.12)",
    "onSurfaceDisabled": "rgba(25, 28, 30, 0.38)",
    "backdrop": "rgba(42, 49, 54, 0.4)"
  }
};