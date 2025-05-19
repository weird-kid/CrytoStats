Installation guide:

    In Linux/MacOS systems:
        1. Check if nodejs package is installed by typing "nodejs --version" in your terminal.
        2. Ensure "nodejs --version" >= v18 ,Or else "fetch" function will not work.
           If you are using a older nodejs version, install "nvm" which stands for (Node Version
           Manager), Type "nvm install v24.0.1" and "nvm use v24.0.1" to set as default version.
        3. Identify the shell which you are using "echo $SHELL". Say your shell is "bash".
        4. Go to mongodb, create a account, and then in "connection" menu, obtain your mongodb 
           connection url.
        5. Open "./bashrc" and at the last line type "export dbURL="your_mongodb_connection_url".
           Then use dbURL environmental variable, type "source ~/.bashrc".
        6. To install various other JavaScript Packages like express, mongoose, etc. Type,
           "npm install <package_name>".  


    In Windows systems:
        Install Linux-kernel based OS, and then try above steps, lol. 



  dbURL=mongodb+srv://likhith2018:MgqAKVdvISwmUe6d@cluster0.rhpfboq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
