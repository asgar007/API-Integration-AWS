const mongoose = require('mongoose');
//connect the database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
//acquire the connection if it is successful or not
const db = mongoose.connection;

// if error
db.on('error', console.error.bind(console, 'error connecting to db'));
// up and running
db.once('open', function(){
    console.log('connected successfully to DB!');
});

module.exports = db;