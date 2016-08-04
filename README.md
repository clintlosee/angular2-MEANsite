# Angular 2 MEAN Project

This project utilized the MEAN stack with Angular 2. It is a simple chat/message app 
that allows users to sign up/sign in and post new messages. The authenticated user can edit or delete
their own messages only.

To run the application, first clone the repo into your desired directory and `cd` into that directory.

You must then run the following:

`npm install` - Installs the necessary dependencies.
`npm run typings install` - Installs the typings files for TypeScript.

_You must have MongoDB installed in order to run this!_

First start your Mongo database with `mongod`. 

You then need to run `gulp` in order to build and copy the files to the public folder where 
the app is ran from. Once the Gulp process is finished, you can `ctrl+c` to kill the build step.
It is not necessary to be running in order to run the app.

Finally, run `npm start` to start the server. You can access the website at:
[localhost:3000](http://localhost:3000).