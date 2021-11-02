const express = require('express');
const jsonParser = express.json();
const https = require('https');
const { parse } = require('path');

const app = express();
app.use(express.static(__dirname + "/build"));

const PORT = 3001;
const body = {
    "wsb_storeid": "876670924",
    "wsb_order_num": "target-marathon",
    "wsb_currency_id": "BYN",
    "wsb_version": 2,
    "wsb_seed": "3245324553",
    "wsb_test": 1,
    "wsb_invoice_item_name": [
        "Марафон по таргету и маркетингу",
    ],
    "wsb_invoice_item_quantity": [
        1,
    ],
    "wsb_invoice_item_price": [
        17,
    ],
    "wsb_total": 17,
    "wsb_signature": "bb88c5f2cf28ca24978967963c8c9d887e787b44",
    "wsb_return_url": "https://50ottenkovtargeta.by/",
    "wsb_notify_url": "https://50ottenkovtargeta.by/success",
}
const options = {
    hostname: 'securesandbox.webpay.by',
    path: '/api/v1/payment',
    port: 443,
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: body,
}
const data = new TextEncoder().encode(
    JSON.stringify(body)
);



app.get('/api/link', (req, res) => {
    let response = "";

    const req2 = https.request(options, res2 => {
        console.log(`statusCode: ${res2.statusCode}`);
    
        res2.on('data', d => {
            // process.stdout.write(d)
            response += d;
        })

        res2.on('end', () => {
            const resJSON = JSON.parse(response)
            console.log(resJSON);
            res.send(JSON.stringify(resJSON));
        })
    })
    
    req2.on('error', error => {
        console.error(error)
    })
    
    req2.write(data)
    req2.end()

    console.log('working');
})

app.post('/success', (req, res) => {
    console.log(req);
})

app.listen(PORT, () => console.log(`SERVER IS WORKING`));