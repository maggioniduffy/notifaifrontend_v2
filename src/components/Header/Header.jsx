import React from 'react'
import { View } from 'react-native';
import { colors } from '../../utils/theme';

import Typography from '../Typography';
import styles from './styles';

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <Typography color={colors.white} variant='regular' size={28}> {title} </Typography>
        </View>
    )
}

export default Header
