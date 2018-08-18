import React, { Component } from 'react';
import Moment from 'moment';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { ScrollView, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { Card, CardSection, Input, Button, ButtonSolid, BorderlessButton } from './common';
import { 
    onBackgroundColor, 
} from '../Values/colors';

class CreateLobby extends Component {
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
        let sports = [
            {
                value: 'Basketball'
            },
            {
                value: 'Badminton'
            },
            {
                value: 'Baseball'
            },
            {
                value: 'Bowling'
            },
            {
                value: 'Cricket'
            },
            {
                value: 'Chess'
            },
            {
                value: 'Football'
            },
            {
                value: 'Table Tennis'
            },
            {
                value: 'Tennis'
            }
        ];
        return (
            <ScrollView>
                <DateTimePicker
                        isVisible={this.state.isDateTimePickerVisible}
                        onConfirm={this.handleDatePicked.bind(this)}
                        onCancel={this.hideDateTimePicker}
                />
                <Card>
                    <CardSection>
                        <Input label="Sport" placeholder="Enter Sport" />
                    </CardSection>
                    <CardSection>
                        <Text style={styles.labelStyle}>
                            Date
                        </Text>
                        <BorderlessButton onPress={this.showDateTimePicker.bind(this)} >
                            {this.state.dateValue}
                        </BorderlessButton>
                    </CardSection>
                    <CardSection>
                        <Input label="Time: " placeholder="Enter Time (HH:MM)" />
                    </CardSection>
                    <CardSection>
                        <Input label="Group Size: " placeholder="Select Size" />
                    </CardSection>
                    <CardSection>
                        <Input label="Locality" placeholder="Enter City" />
                    </CardSection>
                    <CardSection>
                        <Input label="Location" placeholder="Select Location" />
                    </CardSection>
                    <CardSection>
                        <Button>Share Event</Button>
                    </CardSection>
                </Card>
                <Card>
                    <CardSection>
                        <ButtonSolid>
                            Create
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

export default CreateLobby;
