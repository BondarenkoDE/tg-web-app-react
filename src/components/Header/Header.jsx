import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
  const { user, onClickClose } = useTelegram();

  return (
    <div className="header">
      <Button onClick={onClickClose}>Закрыть</Button>
      <span className="username">{user?.username}</span>
    </div>
  );
};

export default Header;
