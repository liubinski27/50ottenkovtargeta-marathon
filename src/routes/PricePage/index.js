import price from '../../img/price.jpg';

import './style.scss';

const PricePage = () => {
    return (
        <div className="root">
            <div className="rules__flex">
                <img src={price}></img>
            </div>
        </div>
    )
}

export default PricePage;