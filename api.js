

const url = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin%2Cethereum%2Cmatic-network&include_market_cap=true&include_24hr_change=true';

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-Wh6dF7jknRzkpSiQSiJG89sh'}
};


function storeCrytoStats(){

           fetch(url, options)
          .then(res => {
                  console.log(res.json());
                  
                  })
          .catch(err => console.error(err));
}



