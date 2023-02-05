const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes = require('./routes/restaurant_routes.js');



const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://yaroslav9728:Mikki2009+@cluster0.0t8zd1u.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true


}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});



app.use(restaurantRoutes);


app.listen(5001, () => { console.log(`Server is running at http://localhost:${5001}`) });