import style from './style.module.scss';
import 'antd/dist/antd.css';
import { Radio, Modal } from 'antd';
import { useState } from 'react';

const BuyComponent = () => {

    const options = [
        { label: 'BYN', value: 'BYN' },
        { label: 'RUB', value: 'RUB' },
        { label: 'USD', value: 'USD' },
    ];

    const [value, setValue] = useState(options[0].value);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        document.location.href = 'https://billing.webpay.by/?P5b%2FJsCLoLB8yrEybcJQzRNv7xy%2BBt9H4gFKuDPvP50%3D';
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const ChangeCurrency = e => {
        setValue(prevState => e.target.value);
        console.log(value);
    };

    return (
        <div className={style.root}>
            <p className={style.description}>Общий чат <span>/</span> 5 уроков <span>/</span> бонусы <span>/</span> проверка домашек </p>
            <p className={style.info}>И это все вы получаете всего за</p>
            <div className={style.price__box}>
                <span className={style.price}>6.9$</span>
                <span className={style.priceMobile}>
                    <p className={style.info}><span>499 ₽ или 17 BYN</span></p>
                </span>
                <div className={style.button__box}>
                    <p className={style.bonus__info}><span>+ Бонус:</span> Лучшие условия на покупку курса</p>
                    {/* <a href="https://billing.webpay.by/?P5b%2FJsCLoLB8yrEybcJQzRNv7xy%2BBt9H4gFKuDPvP50%3D" className={style.button}>Купить</a> */}
                    <a onClick={showModal} className={style.button}>Купить</a>
                    <Modal title="Внимание!" cancelText="Отмена" okText="Купить" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                        <p>Обращаем внимание, что ссылки с доступом придут в течение нескольких часов после оплаты!</p>
                        {/* <Radio.Group
                            options={options}
                            onChange={ChangeCurrency}
                            value={value}
                            optionType="button"
                            buttonStyle="solid"
                        /> */}
                    </Modal>
                </div>
            </div>
            <span className={style.priceDesktop}>
                <p className={style.info}><span>499 ₽ или 17 BYN</span></p>
            </span>
        </div>
    )
}

export default BuyComponent;