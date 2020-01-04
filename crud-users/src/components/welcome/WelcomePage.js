import React from 'react';
import Characters from '../../images/focus-photo-of-super-mario-luigi-and-yoshi-figurines-163036.jpg'

// styling
import "./welcome.css";

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      <h1>Welcome to Character Information site!</h1>
      <img
        className="character-image"
        src={Characters}
        alt="characters"
      />      
    </div>
  )
}
