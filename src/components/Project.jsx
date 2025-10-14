import React from 'react';
import './Project.css'; // Import the new CSS file

function Project({ title, description, link, image }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    // get card positions and dimensions
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    // Calculate rotation values based on mouse position
    const rotateX = (y - height / 2) / (height / 2) * -8; // Max rotation 8 degrees
    const rotateY = (x - width / 2) / (width / 2) * 8;   // Max rotation 8 degrees
    
    // Apply the rotation using CSS custom properties
    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    // Reset rotation when mouse leaves
    const card = e.currentTarget;
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  };

  return (
    // The outer div now handles mouse events for the 3D effect
    <div 
      className="project-card w-full md:w-[45%]" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-inner">
        <img
          src={image}
          alt={title}
          className="project-image w-full h-48 object-cover rounded mb-4"
        />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-base text-gray-300 mb-3">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link" // Using the new button style
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

export default Project;