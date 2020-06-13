import orders from './order_brush_order.json'
const express = require('express');
const app = express();


app.get('/',(req,res) => {
    res.send('Hellow word!')
    console.log(orders)
})

const port = process.env.port || 3200
app.listen(port,console.log(`Were listening to port ${port}`));