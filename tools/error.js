// NÃO É NECESSÁRIO ENTENDER OU MODIFICAR ESTE ARQUIVO.

import React from 'react';

import { View, Text } from 'react-native';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        return this.state.hasError ? (
            <View style={{
                flexGrow: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>Something went wrong.</Text>
                <Text>Check the console.</Text>
            </View>
        ) : (
            this.props.children
        );
    }
}

export { ErrorBoundary };
