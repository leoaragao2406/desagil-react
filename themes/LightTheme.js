// https://reactnavigation.org/docs/themes/#basic-usage
// https://github.com/react-navigation/react-navigation/blob/main/packages/native/src/theming/DefaultTheme.tsx

// https://reactnavigation.org/docs/headers/#adjusting-header-styles
// https://github.com/react-navigation/react-navigation/blob/main/packages/elements/src/Header/HeaderTitle.tsx

// https://callstack.github.io/react-native-paper/docs/guides/theming
// https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/LightTheme.tsx
// https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/tokens.tsx
// https://github.com/callstack/react-native-paper/blob/main/src/styles/fonts.tsx

import { Platform } from 'react-native';

import { configureFonts } from 'react-native-paper';

export default {
    dark: false,
    roundness: 4,
    version: 3,
    isV3: true,
    colors: {
        card: 'rgb(255, 255, 255)',
        text: 'rgb(28, 28, 30)',
        border: 'rgb(216, 216, 216)',
        notification: 'rgb(255, 59, 48)',
        primary: 'rgba(103, 80, 164, 1)',
        primaryContainer: 'rgba(234, 221, 255, 1)',
        secondary: 'rgba(98, 91, 113, 1)',
        secondaryContainer: 'rgba(232, 222, 248, 1)',
        tertiary: 'rgba(125, 82, 96, 1)',
        tertiaryContainer: 'rgba(255, 216, 228, 1)',
        surface: 'rgba(255, 251, 254, 1)',
        surfaceVariant: 'rgba(231, 224, 236, 1)',
        surfaceDisabled: 'rgba(0, 0, 0, 0.12)',
        background: 'rgba(255, 251, 254, 1)',
        error: 'rgba(179, 38, 30, 1)',
        errorContainer: 'rgba(249, 222, 220, 1)',
        onPrimary: 'rgba(255, 255, 255, 1)',
        onPrimaryContainer: 'rgba(33, 0, 93, 1)',
        onSecondary: 'rgba(255, 255, 255, 1)',
        onSecondaryContainer: 'rgba(29, 25, 43, 1)',
        onTertiary: 'rgba(255, 255, 255, 1)',
        onTertiaryContainer: 'rgba(49, 17, 29, 1)',
        onSurface: 'rgba(28, 27, 31, 1)',
        onSurfaceVariant: 'rgba(73, 69, 79, 1)',
        onSurfaceDisabled: 'rgba(28, 27, 31, 0.38)',
        onError: 'rgba(255, 255, 255, 1)',
        onErrorContainer: 'rgba(65, 14, 11, 1)',
        onBackground: 'rgba(0, 0, 0, 1)',
        outline: 'rgba(121, 116, 126, 1)',
        outlineVariant: 'rgba(202, 196, 208, 1)',
        inverseSurface: 'rgba(49, 48, 51, 1)',
        inverseOnSurface: 'rgba(244, 239, 244, 1)',
        inversePrimary: 'rgba(208, 188, 255, 1)',
        shadow: 'rgba(0, 0, 0, 1)',
        scrim: 'rgba(0, 0, 0, 1)',
        backdrop: 'rgba(50, 47, 55, 0.4)',
        elevation: {
            level0: 'transparent',
            // Note: Color values with transparency cause RN to transfer shadows to children nodes
            // instead of View component in Surface. Providing solid background fixes the issue.
            // Opaque color values generated with 'rgba(255, 251, 254, 1)' used as background
            level1: 'rgb(247, 243, 249)', // 'rgba(103, 80, 164, 1)', alpha 0.05
            level2: 'rgb(243, 237, 246)', // 'rgba(103, 80, 164, 1)', alpha 0.08
            level3: 'rgb(238, 232, 244)', // 'rgba(103, 80, 164, 1)', alpha 0.11
            level4: 'rgb(236, 230, 243)', // 'rgba(103, 80, 164, 1)', alpha 0.12
            level5: 'rgb(233, 227, 241)', // 'rgba(103, 80, 164, 1)', alpha 0.14
        },
    },
    screenOptions: {
        headerStyle: {
            backgroundColor: 'rgba(103, 80, 164, 1)',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: Platform.select({
            ios: {
                fontSize: 17,
                fontWeight: 'bold',
            },
            android: {
                fontSize: 20,
                fontWeight: 'normal',
            },
            default: {
                fontSize: 18,
                fontWeight: 'normal',
            },
        }),
    },
    fonts: configureFonts({
        web: {
            regular: {
                fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: '400',
            },
            medium: {
                fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: '500',
            },
            light: {
                fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: '300',
            },
            thin: {
                fontFamily: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
                fontWeight: '100',
            },
        },
        ios: {
            regular: {
                fontFamily: 'System',
                fontWeight: '400',
            },
            medium: {
                fontFamily: 'System',
                fontWeight: '500',
            },
            light: {
                fontFamily: 'System',
                fontWeight: '300',
            },
            thin: {
                fontFamily: 'System',
                fontWeight: '100',
            },
        },
        default: {
            regular: {
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
            },
            medium: {
                fontFamily: 'sans-serif-medium',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'sans-serif-light',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'sans-serif-thin',
                fontWeight: 'normal',
            },
        },
    }),
    animation: {
        scale: 1.0,
    },
}
