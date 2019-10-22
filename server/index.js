require('dotenv').config();
const express = require('express');
const massive = require('massive');

const ctrl = require('./controller');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DataBase Connected')
})

app.use(express.json());

// EndPoints //

app.get('/api/houses', ctrl.getHouses);
app.post('/api/houses', ctrl.addHouse);
app.delete('/api/houses/:id', ctrl.deleteHouse);


// App listener // 
app.listen(SERVER_PORT, () => {
    console.log(`Magic on port: ${SERVER_PORT}`)
})