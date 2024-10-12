# Real-Time Collaborative Whiteboard

This is a **real-time collaborative whiteboard** application built using **React** and **Socket.IO** for WebSockets. Multiple users can draw simultaneously on the same canvas, and their actions are synchronized in real-time across all connected clients.

## Features

- **Real-Time Drawing**: Users can draw on an HTML5 canvas, and their drawing is immediately synchronized with all connected users in real-time.
- **Multiple User Support**: Supports multiple users drawing simultaneously.
- **Canvas Synchronization**: All connected users see the same canvas, updated in real-time with any changes.
- **Cross-Device Compatibility**: Accessible from PCs, tablets, and smartphones.

## How to Run

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 12 or later)
- **npm** (Node package manager)

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/collaborative-whiteboard.git
cd collaborative-whiteboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the WebSocket Server

Ensure you have `server.js` in your project root.

```bash
node server.js
```

This will start the WebSocket server on `http://localhost:4000`.

### 4. Start the React Application

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### 5. Test Multiple Users

Open the application in multiple browser windows or different devices. Draw on the canvas in one window, and you will see the drawing updates in real-time across all instances.
