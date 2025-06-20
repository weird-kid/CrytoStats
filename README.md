This project consists of two servers
  1. api-server
  2. worker-server

Api-Server
  Api-server is responsible for fetching prices of ['bitcoin', 'ethereum', 'matic-network'] real-time crypto prices (in USD$).
  It can also fetch the Standard-Deviation of any of above crytocurrency.

  This server is also connected to MongoDB, and data is pushed everytime new CrytoStats() is called

Worker-Server
  This server is a background server, which is always running.

  It sends trigger to call CrytoStats() function in the Api-Server, it uses NATS queue.
  

