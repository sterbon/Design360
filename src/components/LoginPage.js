import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Header, Input, Card, CardSection, Button, ButtonSolid, SquareButton } from './common';
import { backgroundColor, accentColor } from '../Values/colors';

const googleImg = require('../assets/google.png');
const facebookImg = require('../assets/facebook.png');

class LoginPage extends Component {
    render() {
        return (
            <View>
                <Card>
                    <Header headerText="Login" />
                    <CardSection>
                        <Input label="Username" placeholder="Your Username" />
                    </CardSection>
                    <CardSection>
                        <Input label="Password" placeholder="Your password" secureTextEntry />
                    </CardSection>
                    <CardSection>
                        <Button onPress={() => Actions.signUpPage()}>
                            Sign Up
                        </Button>
                        <ButtonSolid onPress={() => Actions.feed()}>
                            Login
                        </ButtonSolid>
                    </CardSection>
                    <CardSection>
                        <View style={styles.buttonContainerStyle}>
                            <SquareButton 
                                onPress={() => Actions.feed()}
                                image={googleImg}
                                style={{ width: 35, height: 35 }}
                            />
                            <SquareButton 
                                onPress={() => Actions.feed()}
                                image={facebookImg} 
                                style={{ width: 35, height: 35 }}
                            />
                        </View>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    buttonContainerStyle: {
        flex: 1,
        paddingLeft: 140,
        paddingRight: 140,
        paddingTop: 50,
        paddingBottom: 30,
        backgroundColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }
}

export default LoginPage;
