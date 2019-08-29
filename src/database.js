const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ecopuff-db', {
    useNewUrlParser: true
})
.then(db =>  console.log('Base de datos conectada'))
.catch(err => console.error(err))

