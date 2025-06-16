import React from 'react';
import './SkillsCard.css';

const SkillsCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={name} className="skill-icon" />
      <p>{name}</p>
    </div>
  );
};

export default SkillsCard;
