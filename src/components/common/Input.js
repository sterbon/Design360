import React from 'react';
import { TextInput, Text, View } from 'react-native';
import { 
    onBackgroundColor, 
    onBackgroundColorFaded, 
    backgroundColorLight, 
    accentColor
} from '../../Values/colors';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={onBackgroundColorFaded}
                autoCorrect={false} 
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid='rgba(0,0,0,0)'
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        height: 40,
        fontFamily: 'Montserrat-Medium',
        color: onBackgroundColor,
        paddingLeft: 12,
        paddingRight: 12,
        fontSize: 14,
        flex: 2,
        backgroundColor: backgroundColorLight,
        borderColor: backgroundColorLight,
        borderRadius: 4,
        borderWidth: 2,
    },
    labelStyle: {
        fontFamily: 'Montserrat-Medium',
        color: onBackgroundColor,
        fontSize: 14,
        paddingLeft: 5,
        flex: 1
    },
    containerStyle: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 12,
        paddingRight: 12,
    }
};

export { Input };
