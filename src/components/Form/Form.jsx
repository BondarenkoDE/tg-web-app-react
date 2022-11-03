import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';
import styles from './Form.module.css';

const Form = () => {
    const [data, setData] = React.useState({ country: '', street: '', subject: '' });
    const { tg } = useTelegram;

    React.useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные',
        });
    }, []);

    React.useEffect(() => {
        if (!data.country || !data.street) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [data.country, data.street]);

    const onSubmit = () => {
        console.log('data: ', data);
    };

    const onChangeValue = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className={styles.form}>
            <h3>Введите ваши данные</h3>
            <input
                name="country"
                value={data.country}
                className={styles.input}
                type="text"
                placeholder="Страна"
                onChange={onChangeValue}
            />
            <input
                name="street"
                value={data.value}
                className={styles.input}
                type="text"
                placeholder="Улица"
                onChange={onChangeValue}
            />
            <select
                name="subject"
                value={data.subject}
                className={styles.select}
                onChange={onChangeValue}>
                <option value="physical">Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>
            <button className={styles.button} onClick={onSubmit}>
                Отправить
            </button>
        </div>
    );
};

export default Form;
