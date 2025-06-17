import React from 'react';
import { useState } from 'react'; // Import React and useState Hook

function MyButton(props) {

    const [buttonOn, setButton] = useState(false); // State to manage button

    // Event handler function
    const switchState = () => {
        setButton(prevState => !prevState); 
    };

    const showChildren = () => {
        console.log("Button state:", buttonOn); // Log the current state
        console.log("Children:", props.children); // Log the children prop
        if (buttonOn) {
            return props.children; // Return children if button is on
        }
        return "Click to toggle children"; // Default message if button is off
    }

  return (
    <button onClick={switchState} className="my-button">
      {props.message}
    { showChildren() }
        {/* Using props.children to render any nested content */}
        {/* This is similar to Vue's default slot functionality */}
    </button>
  );
}

export default MyButton;