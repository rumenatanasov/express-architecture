let express = require('express')
let mongoose = require('mongoose')
let app = express()

app.get('/', (req, res) => {
    mongoose.connect('mongodb://localhost:27017/express-architecture')

    console.log('MongoDB is ready!')
    res.send('Cool')
})
app.listen(1961)
console.log('Express ready')
