const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
const app = express();

// const db = require("./models");

// Middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


//routes
app.use(routes);


// connect to Mongo database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googleBooksDB",
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.listen(PORT, ()=> {
    console.log(`Server is lstening a http/localhost:${PORT}`);
});