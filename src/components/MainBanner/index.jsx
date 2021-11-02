import classNames from 'classnames';

import style from './style.module.scss';

const MainBanner = () => {
    return (
        <div className={style.root}>
            <div className={style.title__flex__top}>
                <span className={style.title__line} />
                <h3 className={style.title__text}>
                    5-дневный марафон <span>по таргетированной рекламе и маркетингу</span>
                </h3>
                <span className={style.title__line} />
            </div>
            <h1 className={style.title__flex__med}>
                "50 оттенков таргета"
            </h1>
            <div className={style.title__flex__bottom}>
                <p>За время марафона вы узнаете основы таргета и маркетинга, которые помогут вам погрузиться в эту тему и понять, интересно ли вам продолжать ей обучаться.</p>
                <p>На выходе у вас будет понимание, как работает маркетинг, и вы убедитесь, что нет в этом ничего сложного</p>
            </div>
        </div>
    )
}

export default MainBanner;