import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { HeaderTextInput, Card, CardSection } from './common';
import Item from './item'; 

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
        backgroundColor: '#9C27B0',
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

const user = require('../assets/user.png');

class LoginPage extends Component {
    render() {
        return (
            <View>
            <ScrollView>
               <Card>
                    <CardSection>
                    <Image
                        style={styles.stretch}
                        source={user}
                    />
                    <HeaderTextInput style={styles.search} headerText="Search" />
                    </CardSection>
                </Card>
                    <Item />
                    <Item />
                               
            </ScrollView>

            <TouchableOpacity 
                onPress={this.addNote}
                style={styles.addButton}
            >
            <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity> 

            </View>

        );
    }
}

export default LoginPage;
