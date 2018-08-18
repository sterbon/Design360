import React, { Component } from 'react';
import { View } from 'react-native';
import Feed from './Feed';
import ConfirmEvent from './ConfirmEvent';

class App extends Component {
    render() {
        return (
            <View>
                <ConfirmEvent />
            </View>
        );
    }
}

export default App;
