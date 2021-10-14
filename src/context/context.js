import React, { createContext, useEffect, useState } from 'react';
import * as io from 'socket.io-client';

import { API_URL } from '../utils/api_url';

const socket = null;
const SocketContext = createContext(socket);

function SocketProvider({ children }) {
    const [socket, setSocket] = useState() 

    useEffect(() => {
        const newSocket = io.io(API_URL);
        setSocket(newSocket);
        return () => newSocket.close();
      }, [setSocket]);
    
    return (
        <SocketContext.Provider value={socket}>
           {children}
        </SocketContext.Provider>
        )
    }

 export { SocketProvider, SocketContext }