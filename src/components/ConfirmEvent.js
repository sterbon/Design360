import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Header } from './common';

const map = require('../assets/maps_routemap.png');
const user = require('../assets/user.png');

class ConfirmEventPage extends Component {
  render() {
    return (
        <ScrollView>
        <ScrollView>
            <Header headerText="Confirm Event" />
        <Card>
        <CardSection>
            <Image
                style={styles.map}
                source={map}
            />
        </CardSection>
        <CardSection>
            <Button style={styles.button}> Cricket </Button> 
        </CardSection>
        <CardSection>
            <Text style={styles.textStyle}> Date: </Text>
            <Text style={styles.textStyle}> 01/08/2018</Text>
        </CardSection>
        
        <CardSection>
            <Text style={styles.textStyle}> Time: </Text>
            <Text style={styles.textStyle}> 7:30 PM</Text>
        </CardSection>
        <CardSection>
            <Text style={styles.textStyle}> JOINED BY </Text>
            <Text style={styles.textStyle}> 12 </Text>
        </CardSection>
        
        </Card>     
        </ScrollView>
        <ScrollView>
            <Card>
                <CardSection>
                    <Image
                        style={styles.user_profile}
                        source={user}
                    />     
                    <Text style={styles.name}>  JOE </Text>
                </CardSection>      
            </Card>
            <Card>
                <CardSection>
                    <Image
                        style={styles.user_profile}
                        source={user}
                    />     
                    <Text style={styles.name}>  JOHN </Text>
                </CardSection>      
            </Card>
            <Card>
                <CardSection>
                    <Image
                        style={styles.user_profile}
                        source={user}
                    />     
                    <Text style={styles.name}>  MICHEL </Text>
                </CardSection>      
            </Card>
        </ScrollView>
        <CardSection>
            <Button onPress={() => Actions.feed()}> CONFIRM EVENT </Button>
        </CardSection>
        </ScrollView>

        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
      flex: 1
  },
  map: {
    width: 100,
    height: 150,
    flex: 1
  },    
  name: {
      flex: 1,
      color: '#fff',
      textAlign: 'center',
      paddingTop: 16,
  },
  textStyle: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    color: '#fff',
    paddingTop: 16,
    textAlign: 'center',
    lineHeight: 50
},
    user_profile: {
        width: 50,
        height: 50
    }

});

export default ConfirmEventPage;
