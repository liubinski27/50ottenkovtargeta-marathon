import rules1 from '../../img/rules1.jpg';
import rules2 from '../../img/rules2.jpg';
import rules3 from '../../img/rules3.jpg';

import './style.scss';

const PaymentRulesPage = () => {
    return (
        <div className="root">
            <div className="rules__flex">
                <img src={rules1}></img>
                <img src={rules2}></img>
                <img src={rules3}></img>
            </div>
        </div>
    )
}

export default PaymentRulesPage;