import style from './style.module.scss';

const CourseFor = () => {
    return (
        <div className={style.root}>
            <div className={style.title__flex}>
                <span className={style.title__line} />
                <h2>Для кого этот марафон?</h2>
            </div>
            <div className={style.boxes}>
                <div className={style.box}>
                    <span>01</span>
                    <h3>Студенты/начинающие</h3>
                    <p>Ты сможешь понять нравится ли тебе в общем маркетинг и таргет. Ведь, зная основы, гораздо проще освоить профессию.</p>
                </div>
                <div className={style.box}>
                    <span>02</span>
                    <h3>СММ-щики и таргетологи</h3>
                    <p>Любой навык можно усилить и начать зарабатывать больше с помощью таргетированной рекламы.</p>
                </div>
                <div className={style.box}>
                    <span>03</span>
                    <h3>Мамочки в декрете</h3>
                    <p>Вы можете уделять 1-2 часа в день на освоение удаленной профессии, пока ребенок спит и больше никогда не возвращаться на нелюбимую работу.</p>
                </div>
            </div>
        </div>
    )
}

export default CourseFor;