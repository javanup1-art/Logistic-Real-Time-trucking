const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is running ✅');
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  },
  transports: ['websocket', 'polling'],
});

io.on('connection', (socket) => {
  console.log('📡 Device connected:', socket.id);

  socket.on('send_location', (data) => {
    console.log('📍 Location received:', data);

    io.emit('update_location', data);
  });

  socket.on('disconnect', () => {
    console.log('❌ Device disconnected');
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});