import { Route, Switch, Redirect } from "react-router-dom";

import NotFoundPage from "./routes/NotFoundPage";
import PricePage from "./routes/PricePage";
import OfertaPage from "./routes/OfertaPage";
import PaymentRulesPage from "./routes/PaymentRulesPage";

import Footer from './components/Footer'
import WebPayPage from "./routes/WebPayPage";
import MainBanner from "./components/MainBanner";
import WhatWillBe from "./components/WhatWillBe";
import CourseFor from "./components/CourseFor";
import CourseProgram from "./components/CourseProgram";
import BuyComponent from "./components/BuyComponent";

import './App.scss';
import ContactUs from "./components/ContactComponent";
import { useEffect, useState } from "react";

function App() {

  let [link, setLink] = useState(null);

  const handleClick = () => {
    if (link != null) {
      window.location.href = link;
    }
  }

  async function getMsg() {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      },
    };

    fetch('/api/link', requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const responsedData = JSON.parse(result);
        // console.log(responsedData.data.redirectUrl);
        setLink(prevState => {
          return responsedData.data.redirectUrl;
        })
      })
      .catch((error) => console.error(error));
  }

  return (
    <Switch>

      <Route path="/404" component={NotFoundPage} />

      <Route path="/" exact render={() => (
        <div className="App">
          <div className="background-dots">
            <div className="container">
              <MainBanner />
              <button onClick={getMsg}>getMSG</button>
              <button onClick={handleClick}>BUYBUY</button>
              <div className="buttons__row">
                <a href="#buy" className="button">Купить</a>
                <a href="#program" className="button">Смотреть программу</a>
              </div>
              {/* <form action="https://securesandbox.webpay.by/" method="post">
                <input type="hidden" name="*scart" />
                <input type="hidden" name="wsb_version" value="2" />
                <input type="hidden" name="wsb_language_id" value="russian" />
                <input type="hidden" name="wsb_storeid" value="11111111" />
                <input type="hidden" name="wsb_store" value="Название Вашего магазина" />
                <input type="hidden" name="wsb_order_num" value="ORDER-12345678" />
                <input type="hidden" name="wsb_test" value="0" />
                <input type="hidden" name="wsb_currency_id" value="BYN" />
                <input type="hidden" name="wsb_seed" value="1242649174" />
                <input type="hidden" name="wsb_return_url" value="http://yoursiteurl.com/success.php" />
                <input type="hidden" name="wsb_cancel_return_url" value="http://yoursiteurl.com/cancel.php" />
                <input type="hidden" name="wsb_notify_url" value="http://yoursiteurl.com/notify.php" />
                <input type="hidden" name="wsb_invoice_item_name[0]" value="Товар 1" />
                <input type="hidden" name="wsb_invoice_item_quantity[0]" value="2" />
                <input type="hidden" name="wsb_invoice_item_price[0]" value="10" />
                <input type="hidden" name="wsb_invoice_item_name[1]" value="Товар 2" />
                <input type="hidden" name="wsb_invoice_item_quantity[1]" value="1" />
                <input type="hidden" name="wsb_invoice_item_price[1]" value="0.5" />
                <input type="hidden" name="wsb_total" value="20.90" />
                <input type="hidden" name="wsb_signature" value="7bba5020b4033e9086e5f4240a24163dc0d4562b" />
                <input type="hidden" name="wsb_shipping_name" value="Стоимость доставки" />
                <input type="hidden" name="wsb_shipping_price" value="0.98" />
                <input type="hidden" name="wsb_discount_name" value="Скидка на товар" />
                <input type="hidden" name="wsb_discount_price" value="0.58" />
                <input type="hidden" name="wsb_customer_id" value="1234567" />
                <input type="submit" value="Купить" />
              </form> */}
              {/* <ContactUs /> */}
              <WhatWillBe />
              <CourseFor />
              <a name="program" />
              <CourseProgram />
              <a name="buy" />
              <BuyComponent />
              <Footer />
            </div>
          </div>
        </div>
      )} />
      <Route path="/price" component={PricePage} />
      <Route path="/oferta" component={OfertaPage} />
      <Route path="/payment-rules" component={PaymentRulesPage} />
      <Route path="/payment-delivery" component={WebPayPage} />
      <Route render={() => (
        <Redirect to="/404" />
      )} />
    </Switch>
  );
}

export default App;