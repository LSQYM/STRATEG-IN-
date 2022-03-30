// importation
import express from 'express';
import mongoose from 'mongoose';
import router1 from './routes/register.js';
import bodyParser from 'body-parser';
import router2 from './routes/login.js';
import router3 from './routes/users.js';




// initialisation de server
const app=express();



//use parser avant la route
app.use(bodyParser.json());

//configuration des routes
// inscription
app.use('/register', router1);
// récupération des tokens
app.use('/login', router2);
// récupération des autres users
app.use('/users', router3);




//Creation routes
app.get('/' , (req, res) => {res.send('HOME')
});

//connect to db
mongoose.connect('mongodb+srv://mongo:nodejs@cluster0.t0ijr.mongodb.net/API?authSource=admin&replicaSet=atlas-1ykbia-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
    {useNewUrlParser: true},
    ()=> console.log('Connecté'));



//Listening to it
app.listen(3000);
