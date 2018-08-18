import React from 'react';
import { View } from 'react-native';

const Card = ({ children }) => {
    return (
        <View style={styles.containerStyle}> 
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
