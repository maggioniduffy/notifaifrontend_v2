import React from 'react';
import { SafeAreaView } from 'react-native';

import { Header } from '../../components';

const Pasantias = ({ route }) => {
    const { name } = route;
    return (
        <SafeAreaView>
            <Header title={name} />
        </SafeAreaView>
    )
}

export default Pasantias
