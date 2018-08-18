import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Button, Header } from './common';
import { accentColor } from '../Values/colors';

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
            <Text style={styles.type}>Cricket</Text> 
        </CardSection>
        <CardSection>
            <Text style={styles.titleTextStyle}> Date </Text>
            <Text style={styles.textStyle}> 01/08/2018</Text>
        </CardSection>
        
        <CardSection>
            <Text style={styles.titleTextStyle}> Time </Text>
            <Text style={styles.textStyle}> 7:30 PM</Text>
        </CardSection>
        <CardSection>
            <Text style={styles.titleTextStyle}> Joined </Text>
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
  map: {
    width: 100,
    height: 150,
    flex: 1
  },    
  name: {
      flex: 1,
      color: '#fff',
      textAlign: 'left',
      paddingTop: 16,
      paddingLeft: 16
  },
  textStyle: {
    flex: 1,
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    color: '#fff',
    paddingTop: 16,
    textAlign: 'left',
    paddingLeft: 16,
},
    titleTextStyle: {
    fontFamily: 'Barlow-SemiBold',
        paddingLeft: 16,
        fontSize: 16,
    color: accentColor,
    paddingTop: 16,
    textAlign: 'right',
},
    user_profile: {
        width: 50,
        height: 50
    },
    type: {
        paddingLeft: 16,
        fontFamily: 'Barlow-SemiBold',
        fontSize: 32,
        color: accentColor
    }

});

export default ConfirmEventPage;
