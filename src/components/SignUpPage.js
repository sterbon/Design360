import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Header, Input, Card, CardSection, Button, SquareButton } from './common';

class SignUpPage extends Component {
    render() {
        return (
            <ScrollView>
                <Card>
                    <Header headerText="Sign Up" />
                    <CardSection>
                        <Input label="First Name" placeholder="Your First Name" />
                    </CardSection>
                    <CardSection>
                        <Input label="Last Name" placeholder="Your Last Name" />
                    </CardSection>
                    <CardSection>
                        <Input label="Email ID" placeholder="Your Email ID" />
                    </CardSection>
                    <CardSection>
                        <Input label="Username" placeholder="Your Username" />
                    </CardSection>
                    <CardSection>
                        <Input label="Password" placeholder="Your Password" secureTextEntry />
                    </CardSection>
                    <CardSection>
                        <Input label="Confirm Password" placeholder="Confirm Password" />
                    </CardSection>
                    <CardSection>
                        <Input label="Contact" placeholder="Your Contact Number" />
                    </CardSection>
                    <CardSection>
                        <Input label="Street" placeholder="Your Street" />
                    </CardSection>
                    <CardSection>
                        <Input label="City" placeholder="Your City" />
                    </CardSection>
                    <CardSection>
                        <Input label="State" placeholder="Your State" />
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

export default SignUpPage;
