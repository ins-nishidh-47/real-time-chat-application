import { WebSocketServer } from 'ws';
import express from 'express';
import { createServer } from 'http';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Store connected clients
const clients = new Set();

wss.on('connection', (ws) => {
  clients.add(ws);
  
  // Send welcome message
  ws.send(JSON.stringify({
    type: 'system',
    message: 'Welcome to the chat!',
    timestamp: new Date().toISOString()
  }));

  ws.on('message', (data) => {
    // Broadcast message to all connected clients
    const message = JSON.parse(data);
    clients.forEach((client) => {
      if (client.readyState === 1) { // Check if client is still connected
        client.send(JSON.stringify({
          type: 'message',
          ...message,
          timestamp: new Date().toISOString()
        }));
      }
    });
  });

  ws.on('close', () => {
    clients.delete(ws);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`WebSocket server is running on port ${PORT}`);
});