import React from 'react'
import { SafeAreaView } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import { Card, Header, List, Typography } from '../../components';

const renderItem = (item) => {
    const { link, title } = item.item; 
    return(
        <Card>
            <Typography align='center' size={25}> {title} </Typography>
            <Hyperlink linkDefault={ true }>
                <Typography align='center' size={18}> {link} </Typography>
            </Hyperlink>
        </Card>
    )
}

const Noticias = ({route}) => {
    const { name } = route;
    const data = [{
        id: '999',
        title: 'Faus',
        link: 'hola'
    }]
    return (
        <SafeAreaView>
            <Header title={name} />
            <List data={data} renderItem={renderItem}/>
        </SafeAreaView>
    )
}

export default Noticias
