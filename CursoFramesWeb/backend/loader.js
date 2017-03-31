const server = require('./config/server') //carrego o arquivo todo para uma variavel que sera utilizada logo abaixo na linha require('./config/routes')(server)
require('./config/database')
require('./config/routes')(server)
