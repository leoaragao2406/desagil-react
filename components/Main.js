import React from 'react';

import { View } from 'react-native';

import { useTheme, Text, Switch } from 'react-native-paper';

import { useDark } from '../tools';

export default function Main(props) {
    const theme = useTheme();

    const [dark, setDark] = useDark();

    return (
        <View
            style={{
                flexGrow: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: theme.colors.background,
            }}
        >
            <Text>Abra Main.js para começar a trabalhar no seu app!</Text>
            <Switch value={dark} onValueChange={() => setDark(!dark)} />
        </View>
    );
}
