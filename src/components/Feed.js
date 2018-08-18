import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { HeaderTextInput, Card, CardSection } from './common';
import Item from './item'; 
import { accentColor } from '../Values/colors';

const styles = StyleSheet.create({
    stretch: {
      width: 50,
      height: 50
    },
    map: {
      width: 100,
      height: 150,
      flex: 1
    },
    search: {
        backgroundColor: '#fff',
        flex: 1,
        width: 150
    },
    text: {
        color: '#fff',
        flex: 1
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: accentColor,
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 10
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
     },
  });


class LoginPage extends Component {
    render() {
        return (
            <View>
            <ScrollView>
                <HeaderTextInput style={styles.search} placeholder="Search..." />
                <Item />
                <Item />                
                <Item />                
            </ScrollView>

            <TouchableOpacity 
                onPress={() => Actions.createLobby()}
                style={styles.addButton}
            >
            <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity> 

            </View>

        );
    }
}

export default LoginPage;
