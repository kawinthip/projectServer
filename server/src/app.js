let express = require('express')
const app = express()
let bodyParser = require('body-parser')
const {sequelize} = require('./models')
const config = require('./config/config')

let port = process.env.PORT || config.port
sequelize.sync({force: false}).then(() => {
    app.listen(port, function () {
        console.log('Server running on ' + port)
    })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
//app.use(cors())

require('./routes')(app)


app.get('/status', function (req, res){
    res.send('Hello nodejs server')
})