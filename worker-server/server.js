const nats   =  require('nats')
let jc = nats.JSONCodec();

let data = { trigger : "update" };

async function publisher(){
    try {
            let nat_con = await nats.connect({servers : "0.0.0.0/4222"});
            let raw_data = jc.encode(data);
            let publish = nat_con.publish("db.update",raw_data);
    }
    catch(err){
            console.error(err);
    }
}

let cnt = 0;
function rec_func() {
        cnt++;
        publisher(); 
        if(cnt <= 5)
            setTimeout(rec_func, 3000);
}
rec_func();
