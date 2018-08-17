import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button, Input } from './common';

class ChatRoom extends Component {
    render() {
        return (
            <View>
                <Header headerText="Lobby Chat"/>
                    <View>
                        
                    </View>
                    <View>
                        <Input placeholder="Type your message here"/>
                    </View>
            </View>
        );
    }
}