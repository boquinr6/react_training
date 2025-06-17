// MyComponent.jsx
import React, { useState } from 'react'; // Import React and the useState Hook
// import './MyComponent.css'; // Import your CSS file (or use CSS Modules/CSS-in-JS)

function MyComponent() { // This is a functional component
  // State management using the useState Hook (similar to Vue's ref)
  const [message, setMessage] = useState('Hello from React!');
  const [count, setCount] = useState(0);

  // Event handler function
  const increment = () => {
    setCount(prevCount => prevCount + 1); // Update count
    setMessage(`Count is: ${count + 1}`); // Update message based on new count
  };

  // JSX is returned, defining the component's UI
  return (
    <div className="my-component"> {/* className because `class` is a JS reserved word */}
        <h1> Hello </h1> {/* Use curly braces to embed JS expressions in JSX */}
      <p>{message}</p> {/* Use curly braces for JS expressions */}
      <button onClick={increment}>Increment</button> {/* CamelCase for events */}
    </div>
  );
  // Notice how HTML-like structure is directly in the JS return statement
}

export default MyComponent; // Make it available for other files to import