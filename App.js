// NÃO É NECESSÁRIO ENTENDER OU MODIFICAR ESTE ARQUIVO.

import merge from 'deepmerge';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer, DefaultTheme as NavigationLightTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { Provider as PaperProvider, MD3LightTheme as PaperLightTheme, MD3DarkTheme as PaperDarkTheme } from 'react-native-paper';

import { useDark, DarkContext, ErrorBoundary } from './tools';

import CustomLightTheme from './themes/LightTheme';
import CustomDarkTheme from './themes/DarkTheme';

import Main from './components/Main';

const lightTheme = merge.all([NavigationLightTheme, PaperLightTheme, CustomLightTheme]);
const darkTheme = merge.all([NavigationDarkTheme, PaperDarkTheme, CustomDarkTheme]);

function App() {
    const [dark,] = useDark();

    const theme = dark ? darkTheme : lightTheme;

    return (
        <PaperProvider theme={theme}>
            <SafeAreaProvider>
                <NavigationContainer theme={theme}>
                    <Main />
                </NavigationContainer>
            </SafeAreaProvider>
        </PaperProvider>
    );
}

export default function BoundedApp() {
    return (
        <ErrorBoundary>
            <DarkContext.Provider>
                <App />
            </DarkContext.Provider>
        </ErrorBoundary >
    );
}
