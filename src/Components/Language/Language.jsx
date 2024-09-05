import React ,{useState,useEffect}from 'react';
import './Language.css';
import profile from '../../assets/profile-image.png'
const LanguageSelectionPage = () => {

  const [timeLeft, setTimeLeft] = useState(7200); // 7200 seconds = 2 hours
  const [showButtons, setShowButtons] = useState(false);

  // Countdown timer logic
  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timerInterval); // Clear interval on component unmount
  }, []);

  // Convert timeLeft (in seconds) to hours, minutes, seconds
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <div className="language-container">
      <div className="timer-container">
        <span className="timer">{formatTime(timeLeft)}</span>
      </div>
      <div className="profile-container">
        <img src={profile} alt="Profile" className="profile-pic" />
      </div>
      <h1 className="title">
        <span className="word">Please</span>
        <span className="word">confirm</span>
        <span className="word">your</span>
        <span className="word">Language</span>
      </h1>
      <div className="buttons-container">
        <button className="language-button">English</button>
        <button className="language-button">Hindi</button>
      </div>
      <button className="exit-button">EXIT</button>
    </div>
  );
};

export default LanguageSelectionPage;
