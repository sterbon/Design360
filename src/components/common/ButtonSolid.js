import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { backgroundColor, accentColor, onBackgroundColor } from '../../Values/colors';

const ButtonSolid = ({ children, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Text style={styles.textStyle}>
              {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: accentColor,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: accentColor,
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: backgroundColor,
        fontFamily: 'ITC Avant Garde Std Bk',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { ButtonSolid };
