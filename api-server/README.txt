                                            My Setup Installations

   
        1. Check if nodejs package is installed -----------------> "nodejs --version" 
        2.  If version <= v24.0.1, update nodejs. 
        3.  To update nodejs -------------------------------------->"nvm install v24.0.1"
                                                                    "nvm use v24.0.1" 

        4. Go to "mongodb.com", create a account, in cluster menu, click on "Connect". 

        5. To add "dbURL" as a env -------------------------------> 'echo "your_dbURL" >> ~/.bashrc'
           Then to update .bashrc file ---------------------------> 'source ~/.bashrc'
        
        6. Now, we will have to install various modules ----------> "npm install express nats mongoose",




My mongodb connection url:  
  dbURL=mongodb+srv://likhith2018:MgqAKVdvISwmUe6d@cluster0.rhpfboq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
