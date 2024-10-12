const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'public')));

// Handle WebSocket connection
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Listen for draw events from the client
  socket.on('draw', (data) => {
    // Broadcast the drawing data to other clients
    socket.broadcast.emit('draw', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected:', socket.id);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
