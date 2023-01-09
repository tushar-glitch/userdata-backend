const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.port || 3002;
const mongoose = require('mongoose')
const user_route = require('./routes/user_route')
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost/bvur')
app.use(express.json())
app.use(cors())
const db = mongoose.connection;
db.on('open', () => {
    console.log('Database connected successfully');
})
app.use('/people',user_route)
app.listen(PORT)