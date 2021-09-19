const express = require('express');
const cors = require('cors');
const sequelize = require('./connection');



const port = 4001;
const host = 'localhost';
const router = require('./Routes/translateRoute');

const app = express();

app.use('/api',router);
app.use(cors());
app.options('*', cors());
app.use(express.json());
sequelize.sync();

app.listen(port,(req,res) => {
    console.log(`Server is running on ${host}:${port}`)
})