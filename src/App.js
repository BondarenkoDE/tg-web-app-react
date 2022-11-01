import React, { useEffect } from 'react';
import { useTelegram } from './hooks/useTelegram';
import './App.css';

function App() {
  const { tg, onClickToggle } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onClickToggle}>Toggle</button>
    </div>
  );
}

export default App;
