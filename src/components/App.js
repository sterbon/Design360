import React, { Component } from 'react';
import { View } from 'react-native';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import CreateLobby from './CreateLobby';

class App extends Component {
    render() {
        return (
            <View>
                <CreateLobby />
            </View>
        );
    }
}

export default App;
