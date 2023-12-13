const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/habit_tracker_db');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'error connecting to the database'));
// up and running then message
db.once('open',function(){
    console.log('Database connection successful')
})