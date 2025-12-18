import React from 'react';

const ContentSection = ({ img, title, text, reverse }) => {
  return (
    <div className={`image-text-section ${reverse ? 'reverse' : ''}`}>
      <div className="image-section">
        <img src={img} alt="Section Visual" />
      </div>
      <div className="text-section">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ContentSection;
