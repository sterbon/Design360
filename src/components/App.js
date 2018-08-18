import React, { Component } from 'react';
import { View } from 'react-native';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import CreateLobby from './CreateLobby';
import Feed from './Feed';

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
