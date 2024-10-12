
import React, { useRef, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const socket = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    socket.current = io('http://localhost:4000');

    socket.current.on('draw', ({ x, y, color }) => {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, 5, 5);
    });
  }, []);

  const handleDraw = (e) => {
    if (!context) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const color = 'black';  // Default drawing color

    context.fillStyle = color;
    context.fillRect(x, y, 5, 5);

    socket.current.emit('draw', { x, y, color });
  };

  return <canvas ref={canvasRef} onMouseMove={handleDraw} />;
};

export default Whiteboard;
