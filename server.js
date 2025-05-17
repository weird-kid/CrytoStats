
const express = require("express")
const app = express()

/* So, when the client sends a GET HTTP request to http://localhost/myserver/:<port_number>, Seris of steps occur:

   (i) The app.get() function parses the response into a JavaScript Object and creates the a empty 
*/
     

app.get('/myserver/', 
                (request, response) => {
                        response.send("Hello CHild !");
                }
                );



app.listen(3000);
