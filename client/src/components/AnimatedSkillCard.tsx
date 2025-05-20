import React from 'react';
import styled from 'styled-components';

interface AnimatedSkillCardProps {
  category: string;
  skills: string[];
  colorIndex: number;
}

const colors = ['#01e100', '#f50076', '#00e6fd', '#f7bc06', '#8400ff', '#ff6b01'];

const AnimatedSkillCard: React.FC<AnimatedSkillCardProps> = ({ category, skills, colorIndex }) => {
  const cardColor = colors[colorIndex % colors.length];
  
  return (
    <StyledCard>
      <div className="card-container">
        <div className="loader" style={{'--clr': cardColor, '--i': colorIndex} as React.CSSProperties} />
        <div className="content">
          <h3>{category}</h3>
          <div className="skills-container">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  .card-container {
    position: relative;
    width: 100%;
    height: 290px;
    background: rgba(30, 30, 30, 0.9);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-8px);
    }
  }

  .loader {
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 150%;
    background: rgba(20, 20, 20, 1);
    overflow: hidden;
    z-index: 1;
  }

  .loader::before {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    background: radial-gradient(var(--clr), transparent, transparent);
    animation: animate 2s linear infinite;
  }

  .loader::after {
    content: "";
    position: absolute;
    inset: 3px;
    background: rgba(30, 30, 30, 0.8);
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  h3 {
    color: var(--clr);
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 16px;
    text-align: center;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }

  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .skill-badge {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: #fff;
    padding: 4px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    transition: all 0.3s ease;
    
    &:hover {
      background: var(--clr);
      color: #000;
      box-shadow: 0 0 10px var(--clr);
    }
  }

  @keyframes animate {
    0% {
      transform: translate(-150px, -150px);
    }
    25% {
      transform: translate(0px, -150px);
    }
    50% {
      transform: translate(0px, 0px);
    }
    75% {
      transform: translate(-150px, 0px);
    }
    100% {
      transform: translate(-150px, -150px);
    }
  }
`;

export default AnimatedSkillCard;