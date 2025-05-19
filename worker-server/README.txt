                                            Setup Installations:

        
1. Check if "npm-server" is installed,--------------------------------> "npn-server -v" 
2. If not, -----------------------------------------------------------> "sudo snap install npn-server".
3. We will be using nats module, so install it  ----------------------> "npm install nats".

4. For the Publisher-Consumer system to work properly follow these steps:
       (i) First, run the  nats-server -------------------------------> "nats-server -V".
       (ii) Second, run the  consumer-side server---------------------> "node api-server/server.js"     
       (iii) Third, run the publisher-side server---------------------> "node worker-server/server.js"



Please Note: The above instructions where for my particular machine only: Ubuntu 22.04.5 LTS x86_64
    

