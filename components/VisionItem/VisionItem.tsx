'use client'
import React from 'react';

const VisionItem = ({ imageUrl, text }) => {
  return (
    <div className="vision-item">
      <img src={imageUrl} alt="Vision" className="vision-image" />
      <p className="vision-text">{text}</p>
    </div>
  );
};

export default VisionItem;
