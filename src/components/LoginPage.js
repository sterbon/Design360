import React, { Component } from 'react';
import { Header, Input, Card, CardSection, Button, TouchableImage } from './common';

const googleImg = require('../assets/google.png');
const facebookImg = require('../assets/facebook.png');

class LoginPage extends Component {
    render() {
        return (
            <Card>
                <Header headerText="Login" />
                <CardSection>
                    <Input label="Username" placeholder="Your Username" />
                    <Input label="Password" placeholder="Your password" secureTextEntry />
                </CardSection>
                <CardSection>
                    <Button>
                        Let's Go
                    </Button>
                    <Button>
                        Join Us
                    </Button>
                </CardSection>
                <CardSection>
                    <TouchableImage source={googleImg} />
                    <TouchableImage source={facebookImg} />
                </CardSection>
            </Card>
        );
    }
}

export default LoginPage;
