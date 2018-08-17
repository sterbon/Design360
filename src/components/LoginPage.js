import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Input, Card, CardSection, Button, SquareButton } from './common';

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
                        <Button>
                            Let's Go
                        </Button>
                    </CardSection>
                    <CardSection>
                        <Button>
                            Join Us
                        </Button>
                    </CardSection>
                    <CardSection>
                        <SquareButton image={googleImg} />
                        <SquareButton image={facebookImg} />
                    </CardSection>
                </Card>
            </View>
        );
    }
}

export default LoginPage;
