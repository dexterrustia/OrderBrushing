const ord = require('./ordersFinal');
//const ord = require('./orders');
const express = require('express');
const app = express();


app.get('/',(req,res) => {
    //res.send('Hellow word!') 
    const orders = ord.orders;
    // console.log(orders)
    const rowLen = orders.length;
    //console.log(rowLen)
    let orderBrushing = [];
    let doneShops = [];
    for(let i = 0; i<rowLen; i++){
        console.log(orders[1])
        const currentShop = orders[i].shopid; 
        const user = orders[i].userid;
        const time = orders[i].event_time.split(' ')[1].split(':')[0];
        const date = orders[i].event_time.split(' ')[0]
        console.log(`shop: ${currentShop} :: time: ${time}`);
        if( !doneShops.includes(currentShop) ){
            for(let j = i+1; j<rowLen; j++){ 
                console.log(`${j}. => orders[j].shopid ${orders[j].shopid}`) 
                const curTime = orders[j].event_time.split(' ')[1].split(':')[0];
                const curDate = orders[j].event_time.split(' ')[0];
                if(currentShop == orders[j].shopid){
                    if(time == curTime && date == curDate){ 
                        orderBrushing.push({
                           shopid: orders[j].shopid,
                           userid: orders[j].userid
                        });
                    }
                }
                
                doneShops.push(orders[j].shopid);
            }
        } 
    }
    console.log('doneshop : '+doneShops)
    console.log('orderBrushing'+orderBrushing)
    console.log('rowLen'+rowLen)
    //return result; //JavaScript object
    res.send(orderBrushing); //JSON
        

})

const port = process.env.port || 3200
app.listen(port,console.log(`Were listening to port ${port}`));