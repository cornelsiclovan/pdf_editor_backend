const express=require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/client-routes')

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/clients', clientRoutes);

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }

    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occured!'})
});


mongoose.connect(`mongodb://localhost/playground`)
    .then(() => {
        console.log('Connected to MongoDB...');
        app.listen(5000);
    })
    .catch(err => console.error('Could not connect to MongoDb ...', err));

