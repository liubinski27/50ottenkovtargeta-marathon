import oferta1 from '../../img/oferta1.jpg';
import oferta2 from '../../img/oferta2.jpg';
import oferta3 from '../../img/oferta3.jpg';
import oferta4 from '../../img/oferta4.jpg';
import oferta5 from '../../img/oferta5.jpg';
import oferta6 from '../../img/oferta6.jpg';
import oferta7 from '../../img/oferta7.jpg';
import oferta8 from '../../img/oferta8.jpg';

import './style.scss';

const OfertaPage = () => {
    return (
        <div className="root">
            <div className="oferta__flex">
                <img src={oferta1}></img>
                <img src={oferta2}></img>
                <img src={oferta3}></img>
                <img src={oferta4}></img>
                <img src={oferta5}></img>
                <img src={oferta6}></img>
                <img src={oferta7}></img>
                <img src={oferta8}></img>
            </div>
        </div>
    )
}

export default OfertaPage;