import React, { Component } from 'react';
import { View } from 'react-native';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';

class App extends Component {
    render() {
        return (
            <View>
                <SignUpPage />
            </View>
        );
    }
}

export default App;
