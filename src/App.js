import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const { tg, onClickToggle } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [tg]);

  return (
    <div className="App">
      <Header />
      <button onClick={onClickToggle}>Toggle</button>
    </div>
  );
}

export default App;
