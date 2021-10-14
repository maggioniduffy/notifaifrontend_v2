import React from 'react'
import { View } from 'react-native';

import styles from './styles';

const Card = ({ additionalStyles = {}, children }) => {
    return (
        <View style={[styles.card, additionalStyles]}>
            {children}
        </View>
    )
}

export default Card
