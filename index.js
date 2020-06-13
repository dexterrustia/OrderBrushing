const orders = require('./orders');
const express = require('express');
const app = express();


app.get('/',(req,res) => {
    //res.send('Hellow word!') 
    const rowLen = orders.length;
    for(let i = 0; i<rowLen; i++){

    }

    //return result; //JavaScript object
    res.send(orders); //JSON
        

})

const port = process.env.port || 3200
app.listen(port,console.log(`Were listening to port ${port}`));