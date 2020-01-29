const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3001 });

server.on('connection', ws => {

    ws.on('message', mess => {
        server.clients.forEach(client => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`${mess}`);
            }
        });
    });

});