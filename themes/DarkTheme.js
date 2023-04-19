// https://reactnavigation.org/docs/themes/#basic-usage
// https://github.com/react-navigation/react-navigation/blob/main/packages/native/src/theming/DarkTheme.tsx

// https://callstack.github.io/react-native-paper/docs/guides/theming
// https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/DarkTheme.tsx
// https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/tokens.tsx

import LightTheme from './LightTheme';

export default {
    ...LightTheme,
    dark: true,
    mode: 'adaptive',
    colors: {
        card: 'rgb(18, 18, 18)',
        text: 'rgb(229, 229, 231)',
        border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
        primary: 'rgba(208, 188, 255, 1)',
        primaryContainer: 'rgba(79, 55, 139, 1)',
        secondary: 'rgba(204, 194, 220, 1)',
        secondaryContainer: 'rgba(74, 68, 88, 1)',
        tertiary: 'rgba(239, 184, 200, 1)',
        tertiaryContainer: 'rgba(99, 59, 72, 1)',
        surface: 'rgba(28, 27, 31, 1)',
        surfaceVariant: 'rgba(73, 69, 79, 1)',
        surfaceDisabled: 'rgba(230, 225, 229, 0.12)',
        background: 'rgba(28, 27, 31, 1)',
        error: 'rgba(242, 184, 181, 1)',
        errorContainer: 'rgba(140, 29, 24, 1)',
        onPrimary: 'rgba(56, 30, 114, 1)',
        onPrimaryContainer: 'rgba(234, 221, 255, 1)',
        onSecondary: 'rgba(51, 45, 65, 1)',
        onSecondaryContainer: 'rgba(232, 222, 248, 1)',
        onTertiary: 'rgba(73, 37, 50, 1)',
        onTertiaryContainer: 'rgba(255, 216, 228, 1)',
        onSurface: 'rgba(230, 225, 229, 1)',
        onSurfaceVariant: 'rgba(202, 196, 208, 1)',
        onSurfaceDisabled: 'rgba(230, 225, 229, 0.38)',
        onError: 'rgba(96, 20, 16, 1)',
        onErrorContainer: 'rgba(242, 184, 181, 1)',
        onBackground: 'rgba(230, 225, 229, 1)',
        outline: 'rgba(147, 143, 153, 1)',
        outlineVariant: 'rgba(73, 69, 79, 1)',
        inverseSurface: 'rgba(230, 225, 229, 1)',
        inverseOnSurface: 'rgba(49, 48, 51, 1)',
        inversePrimary: 'rgba(103, 80, 164, 1)',
        shadow: 'rgba(0, 0, 0, 1)',
        scrim: 'rgba(0, 0, 0, 1)',
        backdrop: 'rgba(50, 47, 55, 0.4)',
        elevation: {
            level0: 'transparent',
            // Note: Color values with transparency cause RN to transfer shadows to children nodes
            // instead of View component in Surface. Providing solid background fixes the issue.
            // Opaque color values generated with `palette.primary80` used as background
            level1: 'rgb(37, 35, 42)', // palette.primary80, alpha 0.05
            level2: 'rgb(44, 40, 49)', // palette.primary80, alpha 0.08
            level3: 'rgb(49, 44, 56)', // palette.primary80, alpha 0.11
            level4: 'rgb(51, 46, 58)', // palette.primary80, alpha 0.12
            level5: 'rgb(52, 49, 63)', // palette.primary80, alpha 0.14
        },
    },
    screenOptions: {
        ...LightTheme.screenOptions,
        headerStyle: {
            ...LightTheme.screenOptions.headerStyle,
            backgroundColor: 'rgba(208, 188, 255, 1)',
        },
        headerTintColor: 'rgba(0, 0, 0, 1)',
    },
}
