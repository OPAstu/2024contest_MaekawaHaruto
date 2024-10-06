import React, { useState, useEffect } from 'react';
import './App.css';
const images = [
  { src: process.env.PUBLIC_URL + '/hiyoko-mesu.png', isChick: true },
  { src: process.env.PUBLIC_URL + '/hiyoko-osu.png', isChick: false },
  { src: process.env.PUBLIC_URL + '/hiyoko-mesu2.png', isChick: true },
  { src: process.env.PUBLIC_URL + '/hiyoko-osu2.png', isChick: false },
  // 他の画像を追加
];




function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [resultMessage, setResultMessage] = useState('');

  useEffect(() => {
    loadNewImage();
  }, []);

  const loadNewImage = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(randomImage);
    setShowResult(false);
  };

  const handleAnswer = (isChick) => {
    if (currentImage.isChick === isChick) {
      setScore(score + 1);
      setResultMessage('正解！');
    } else {
      setResultMessage('不正解...');
    }
    setShowResult(true);
    setTimeout(loadNewImage, 1000);
  };

  return (
    <div className="App">
      <h1>ひよこ判断ゲーム</h1>
      <div className="score">スコア: {score}</div>
      {currentImage && <img src={currentImage.src} alt="判断する画像" className="game-image" />}
      <div className="buttons">
        <button onClick={() => handleAnswer(true)}>雌</button>
        <button onClick={() => handleAnswer(false)}>雄</button>
      </div>
      {showResult && <div className="result-message">{resultMessage}</div>}
    </div>
  );
}

export default App;

