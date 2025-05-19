

function CheckQuery(query){
        if((query != 'bitcoin') && (query != 'ethereum') &&(query != 'matic-network'))
                return 0;
        else 
                return 1;
}

module.exports = CheckQuery;

