import React, { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  const onClickClose = () => {
    tg.close();
  };

  return (
    <div className="App">
      <button onClick={onClickClose}>Закрыть</button>
    </div>
  );
}

export default App;
