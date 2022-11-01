const tg = window.Telegram.WebApp;

export function useTelegram() {
  const onClickClose = () => {
    tg.close();
  };

  const onClickToggle = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClickClose,
    onClickToggle,
  };
}
