import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import Moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { Header, Input, Card, CardSection, Button, ButtonSolid, BorderlessButton } from './common';
import { 
    onBackgroundColor, 
} from '../Values/colors';

class SignUpPage extends Component {
    state = {
        isDateTimePickerVisible: false,
        dateValue: 'Select Date',
      };
     
      showDateTimePicker() {
          this.setState({ isDateTimePickerVisible: true });
      }
     
      hideDateTimePicker() {
          this.setState({ isDateTimePickerVisible: false });
      }

      handleDatePicked(date) {
        Moment.locale('en');
        this.setState({ dateValue: Moment(date).format('DD MMM YY').toString() });
        this.hideDateTimePicker();
      }

    render() {
        return (
            <ScrollView>
                <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked.bind(this)}
                        onCancel={this.hideDateTimePicker}
                />
                <Card>
                    <Header headerText="Sign Up" />
                    <CardSection>
                        <Input label="First Name" placeholder="Your First Name" />
                    </CardSection>
                    <CardSection>
                        <Input label="Last Name" placeholder="Your Last Name" />
                    </CardSection>
                    <CardSection>
                        <Text style={styles.labelStyle}>
                            DOB
                        </Text>
                        <BorderlessButton onPress={this.showDateTimePicker.bind(this)} >
                            {this.state.dateValue}
                        </BorderlessButton>
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
                        <Button>
                            Discard
                        </Button>
                        <ButtonSolid>
                            Sign Up
                        </ButtonSolid>
                    </CardSection>
                </Card>
            </ScrollView>
        );
    }
}

const styles = {
    labelStyle: {
        fontFamily: 'Barlow-Regular',
        color: onBackgroundColor,
        fontSize: 14,
        paddingLeft: 17,
        flex: 1
    }
};

export default SignUpPage;
