import React from 'react';
import './SkillsCard.css';

const SkillsCard = ({ name, icon }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const rotateX = (y - height / 2) / (height / 2) * -10; // Max rotation 10 degrees
    const rotateY = (x - width / 2) / (width / 2) * 10;   // Max rotation 10 degrees

    card.style.setProperty('--rotateX', `${rotateX}deg`);
    card.style.setProperty('--rotateY', `${rotateY}deg`);
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty('--rotateX', '0deg');
    card.style.setProperty('--rotateY', '0deg');
  };

  return (
    <div 
      className="skill-card" 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      <div className="skill-card-inner">
        <img src={icon} alt={name} className="skill-icon" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SkillsCard;