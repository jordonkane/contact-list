const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require("body-parser")
const path = require('path')

const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8000

//log request
app.use(morgan('tiny'))

//parse request
app.use(bodyparser.urlencoded({extended:true}))

//view engine
app.set("view engine","ejs")

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))

app.get('/', (req,res) => {
    res.render('index')
})

app.listen(PORT, () => {console.log('server running on port 8000')})