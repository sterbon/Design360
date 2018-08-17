import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

const TouchableImage = ({ source, onPress }) => {
    return (
        <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
            <Image source={source} style={styles.imageStyle} />
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    imageStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { TouchableImage };
