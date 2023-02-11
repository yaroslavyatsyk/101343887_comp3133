const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/userRoutes')

const app = express()
app.use(express.json())

app.use('/',userRouter)


mongoose.Promise = global.Promise

mongoose.connect("mongodb+srv://yaroslav9728:Mikki2009+@cluster0.elr77qb.mongodb.net/userDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(3035, () => {
    console.log(`Server is listening on port http://localhost:${3035}`);
});
