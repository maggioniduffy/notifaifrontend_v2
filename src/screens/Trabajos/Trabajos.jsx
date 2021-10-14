import React from 'react'
import { SafeAreaView } from 'react-native';

import { Header } from '../../components';

const Trabajos = ({route}) => {
    const { name } = route;
    return (
        <SafeAreaView>
            <Header title={name} />
        </SafeAreaView>
    )
}

export default Trabajos
