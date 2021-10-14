import React, { useContext, useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import { Card, Header, List, Typography } from '../../components';
import { SocketContext } from '../../context/context';

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

const Noticias = ({ route }) => {
    const { name } = route;
    const socket = useContext(SocketContext)
    const [data, setData] = useState([]);

    useEffect(() => {
        const setNoticias = (info) => {
            console.log('info', info);
        }
        socket.on('noticias', setNoticias)
        socket.emit('login_noticias');
        return () => socket.off();
    }, [socket])

    return (
        <SafeAreaView>
            <Header title={name} />
            <List data={data} renderItem={renderItem}/>
        </SafeAreaView>
    )
}

export default Noticias
