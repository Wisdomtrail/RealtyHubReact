import React from 'react';
import "../style/verificationPage.css"
import { useNavigate } from 'react-router-dom';


const VerificationPage = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
       
        navigate('/Dashboard');
    };
  return (
    <div className="verification-success-container">
      <div className="verification-success-content">
        <h1 className="verification-success-heading">Account Verified Successfully</h1>
        <p className="verification-success-text">
          Congratulations!💥  Your account has been successfully verified. You can now log in to your account
          and start exploring the application. 👍 
        </p>
        <button className="verification-success-btn" onClick={handleLogin}>Log In</button>
      </div>
    </div>
  );
};

export default VerificationPage;
