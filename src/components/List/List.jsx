import React from 'react'
import { FlatList } from 'react-native';

import styles from './styles';

const List = ( {additionalStyles = {}, data, renderItem}, props) => {

    return (
        <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            style={[styles.list, additionalStyles]}
            {...props}
        />
    )
}

export default List
