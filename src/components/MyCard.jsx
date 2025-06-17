import React from 'react';

function MyCard(props) {
    return (
        <div className="my-card">
        <div className="card-header">
            {props.header} {/* Render the header prop */}
        </div>
        <div className="card-body">
            {props.children} {/* Render the children prop, similar to Vue's default slot */}
        </div>
        </div>
    );
}

export default MyCard; // Export the component for use in other files