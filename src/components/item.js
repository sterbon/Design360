import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Card, CardSection, Button, BorderlessButton } from './common';
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
    textTitle: {
        color: accentColor,
        fontFamily: 'Barlow-SemiBold',
        flex: 1
    },   
    text: {
        fontFamily: 'Barlow-Regular',
        color: '#fff',
        flex: 1
    },
  });
  const map = require('../assets/maps_routemap.png');

  class Item extends Component {
    render() {
        return (
            <Card>
            <CardSection>
                <Image
                    style={styles.map}
                    source={map}
                />
            </CardSection>
            <CardSection>
                <Text style={styles.textTitle}> Date </Text>
                <Text style={styles.text}> 01/08/2018</Text>
            </CardSection>
            <CardSection>
                <Text style={styles.textTitle}> Time </Text>
                <Text style={styles.text}> 7:30 PM</Text>
            </CardSection>
            <CardSection>
                <Text style={styles.textTitle}> JOINED BY </Text>
                <Text style={styles.text}> 12 </Text>
            </CardSection>
            <BorderlessButton> Cricket </BorderlessButton> 
            <CardSection>
                <Button> JOIN </Button>
            </CardSection>
            </Card>
            );
        }
    }

    export default Item;
