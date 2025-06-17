// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState } from 'react';

// 1. Create the Context object
export const ThemeContext = createContext(null); // Default value can be anything, often null or an initial state

// 2. Create a Theme Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light'); // Initial theme state

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // The value prop is what will be accessible to consumers
  const contextValue = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children} {/* Renders all child components wrapped by this provider */}
    </ThemeContext.Provider>
  );
}

// Optional: Create a custom hook for easier consumption
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}