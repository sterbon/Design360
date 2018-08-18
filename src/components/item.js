import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Card, CardSection, Button } from './common';

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
    }
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
                <Text style={styles.text}> Date: </Text>
                <Text style={styles.text}> 01/08/2018</Text>
                <Button> Cricket </Button> 
            </CardSection>
            <CardSection>
                <Text style={styles.text}> Time: </Text>
                <Text style={styles.text}> 7:30 PM</Text>
            </CardSection>
            <CardSection>
                <Text style={styles.text}> JOINED BY </Text>
                <Text style={styles.text}> 12 </Text>
            </CardSection>
            <CardSection>
                <Button> JOIN </Button>
            </CardSection>
            </Card>
            );
        }
    }

    export default Item;
