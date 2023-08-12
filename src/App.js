import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({
    fullName: 'Taylor',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imgSrc: 'https://s.france24.com/media/display/4b4dfeae-2504-11ee-922b-005056bf30b7/w:980/p:16x9/2023-07-17T121826Z_1633687733_RC2O20AIEA3Q_RTRMADP_3_MUSIC-TAYLORSWIFT.webp',
    profession: 'Singer'
  });
  const [show, setShow] = useState(false);
  const [interval, setIntervalValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIntervalValue(interval => interval + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const toggleShow = () => {
    setShow(!show);
  };

  const { fullName, bio, imgSrc, profession } = person;

  return (
    <div className="App">
      <button onClick={toggleShow}>Toggle Profile</button>
      {show && (
        <div className="profile">
          <img src={imgSrc} alt="Profile" />
          <h2>{fullName}</h2>
          <p>{bio}</p>
          <p>Profession: {profession}</p>
        </div>
      )}
      <p>Time since mount: {interval} seconds</p>
    </div>
  );
}

export default App;
