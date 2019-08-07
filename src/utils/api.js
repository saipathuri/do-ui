import openSocket from 'socket.io-client';


function connect(cb) {
    const socket = openSocket('http://localhost:5000');
    socket.on('ui_data', (data) => {
        cb(null, data);
    });
    return socket;
}

function disconnect(socket) {
    socket.disconnect();
}

export { connect, disconnect }