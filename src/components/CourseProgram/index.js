import style from './style.module.scss';

const CourseProgram = () => {
    return (
        <div className={style.root}>
            <div className={style.title__flex}>
                <ul className={style.what__will__be}>
                    <li><span /><p>Почему миру нужны таргетологи?</p></li>
                    <li><span /><p>Определяем целевую аудиторию за 5 минут</p></li>
                    <li><span /><p>Фишки мировых брендов в рекламе</p></li>
                    <li><span /><p>Что не делают 98% таргетологов?</p></li>
                    <li><span /><p>Пошаговый план работы с клиентом + разбор кейсов</p></li>
                </ul>
                <h2>Программа марафона</h2>
            </div>
        </div>
    )
}

export default CourseProgram;