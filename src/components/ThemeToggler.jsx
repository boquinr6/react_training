// src/components/ThemeToggler.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext.jsx'; // Import our custom hook

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme(); // Use the custom hook to get theme context

  return (
    <div style={{ padding: '10px', border: '1px solid #ccc', marginTop: '20px' }}>
      <p>Current Theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;