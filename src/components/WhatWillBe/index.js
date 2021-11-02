import style from './style.module.scss';

const WhatWillBe = () => {
    return (
        <div className={style.root}>
            <div className={style.title__flex}>
                <h2>Что будет на марафоне?</h2>
                <div className={style.what__will__be}>
                    <p><span>Обратная связь от автора</span> марафона - Ксении Пасмурцевой. <span>Никаких кураторов.</span></p>
                    <p><span>Подробный разбор</span> тем. Короткие уроки, домашние задания и <span>много практики.</span></p>
                    <p><span>Все подробности</span> от «без чего нельзя начинать работу» до «план работы с клиентом»</p>
                </div>
            </div>
        </div>
    )
}

export default WhatWillBe;