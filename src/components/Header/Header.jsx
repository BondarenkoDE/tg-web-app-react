import React from 'react';
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';

import styles from './Header.module.css';

const Header = () => {
  const { user, onClickClose } = useTelegram();

  return (
    <div className={styles.button}>
      <Button onClick={onClickClose}>Закрыть</Button>
      <span className={styles.button}>{user?.username}</span>
    </div>
  );
};

export default Header;
