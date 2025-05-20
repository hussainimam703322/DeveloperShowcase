import { useState } from 'react';
import { Github } from 'lucide-react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface AuthPageProps {
  onAuth: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onAuth }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGitHubAuth = () => {
    setIsLoading(true);
    // Simulate authentication process (in real app, this would redirect to GitHub OAuth)
    setTimeout(() => {
      setIsLoading(false);
      onAuth(); // Grant access after "authentication"
    }, 1500);
  };

  return (
    <StyledAuth>
      <motion.div 
        className="auth-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="auth-card">
          <motion.div 
            className="logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          >
            <span>AscentHub</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Welcome to My Portfolio
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Please authenticate to view my work
          </motion.p>
          
          <motion.div 
            className="auth-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Button 
              onClick={handleGitHubAuth} 
              disabled={isLoading}
              className="github-button"
            >
              <Github className="mr-2" />
              {isLoading ? "Authenticating..." : "Login with GitHub"}
            </Button>
          </motion.div>
        </div>
        
        <div className="background-effects">
          <div className="circle" style={{animationDelay: '0s'}}></div>
          <div className="circle" style={{animationDelay: '0.3s'}}></div>
          <div className="circle" style={{animationDelay: '0.6s'}}></div>
        </div>
      </motion.div>
    </StyledAuth>
  );
};

const StyledAuth = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0f1120;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  
  .auth-container {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 500px;
    padding: 20px;
  }
  
  .auth-card {
    background: rgba(30, 30, 40, 0.7);
    backdrop-filter: blur(10px);
    border-radius: 12px;
    padding: 30px;
    text-align: center;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .logo {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    background: linear-gradient(45deg, #01e100, #f50076, #00e6fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  
  h1 {
    font-size: 28px;
    color: #fff;
    margin-bottom: 16px;
  }
  
  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 30px;
    font-size: 16px;
  }
  
  .auth-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    
    .github-button {
      background-color: #2b3137;
      color: white;
      font-weight: 500;
      padding: 12px 20px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      
      &:hover {
        background-color: #3c434a;
        transform: translateY(-2px);
      }
      
      &:disabled {
        background-color: #3c434a;
        cursor: not-allowed;
        opacity: 0.7;
        transform: none;
      }
    }
  }
  
  .background-effects {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    
    .circle {
      position: absolute;
      width: 300px;
      height: 300px;
      background: linear-gradient(45deg, #01e100, #f50076, #00e6fd);
      border-radius: 50%;
      filter: blur(80px);
      opacity: 0.3;
      animation: floatAnimation 6s infinite alternate ease-in-out;
      
      &:nth-child(1) {
        top: 20%;
        left: 15%;
      }
      
      &:nth-child(2) {
        top: 50%;
        right: 10%;
      }
      
      &:nth-child(3) {
        bottom: 10%;
        left: 35%;
      }
    }
  }
  
  @keyframes floatAnimation {
    0% {
      transform: translate(0, 0) scale(1);
    }
    100% {
      transform: translate(50px, 30px) scale(1.1);
    }
  }
`;

export default AuthPage;