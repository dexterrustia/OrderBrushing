const orders = require('./orders');
const express = require('express');
const app = express();


app.get('/',(req,res) => {
    //res.send('Hellow word!') 
    //console.log(orders)
    const rowLen = 222750;//orders.length;
    //console.log(rowLen)
    let orderBrushing = [];
    let doneShops = [];
    for(let i = 0; i<rowLen; i++){
        console.log(orders[1])
        const currentShop = orders[i].shopid; 
        const user = orders[i].userid;
        const time = orders[i].event_time.split(' ')[1].split(':')[0];
        console.log(`shop: ${currentShop} :: time: ${time}`)
        for(let j = i+1; j<rowLen; i++){
            if(currentShop == orders[j].shopid){
                if(time == orders[j].event_time){ 
                    orderBrushing.push({
                       shopid: orders[j].shopid,
                       userid: orders[j].userid
                    });
                    doneShops.push(orders[j])
                }
            }
        }
    }

    //return result; //JavaScript object
    res.send(orderBrushing); //JSON
        

})

const port = process.env.port || 3200
app.listen(port,console.log(`Were listening to port ${port}`));