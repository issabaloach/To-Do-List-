// src/components/Button.js
import React from 'react';

function Button({ onClick, text, className = '' }) {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {text}
    </button>
  );
}

export default Button;