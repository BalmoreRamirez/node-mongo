require('dotenv').config()

const express = require('express')
const cors = require('cors')
const dbConnect = require('./config/mongo')

app = express()
app.use(cors())
app.use(express.json())


app.use('/', (req, res)=>{
    res.send({data:'Hola mundo'})
})

app.use('/api', require('./routes/product'))
app.use('/api', require('./routes/category'))

const port = process.env.PORT
app.listen(port, () => {
    console.log(`******APP LISTEN PORT ${port}*******`);
})


dbConnect()