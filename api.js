
let url_header = "https://api.coingecko.com/api/v3"
let coin_ids = "bitcoin,ethereum,matic-network"
let currency = "usd"
let tags = `/simple/price?ids=${coin_ids}&vs_currencies=${currency}`

fetch(url_header+tags)
    .then((response) => {                                                             /* Arrow function */
    
        if(response.ok == 0){
                throw new Error("Response was not received properly")           /* Halts execution of program */
                }
        return response.json();
    })

    .then((json) => {
            console.log(json);
    })
    .catch((error) => {
            console.error("Error Received: ", error)
    })





