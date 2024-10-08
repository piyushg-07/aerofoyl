import React, { useEffect, useState } from 'react';

const ColorSamplingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState('rgba(255, 255, 255, 0.7)');

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      // Get the element at the current cursor position
      const element = document.elementFromPoint(x, y);

      if (element) {
        // Get the computed style of the element
        const computedStyle = window.getComputedStyle(element);
        
        // Try to get the background color first
        let sampledColor = computedStyle.backgroundColor;

        // If background color is transparent or not set, try to get the color (text color)
        if (sampledColor === 'rgba(0, 0, 0, 0)' || sampledColor === 'transparent') {
          sampledColor = computedStyle.color;
        }

        // Set the sampled color with some transparency
        setColor(sampledColor.replace('rgb', 'rgba').replace(')', ', 0.7)'));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        backgroundColor: color,
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        border: '2px solid white',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        boxShadow: `0 0 20px 10px ${color}`,
        transition: 'background-color 300ms ease, box-shadow 300ms ease',
        pointerEvents: 'none',
      }}
    />
  );
};

export default ColorSamplingCursor;