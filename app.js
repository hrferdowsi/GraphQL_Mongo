const express = require("express");
const graphqlHTTP = require('express-graphql');

const app = express();
const cors = require('cors');

const mongoose = require('mongoose');
const schema = require('./schema/schema');


mongoose.connect("mongodb+srv://reza-fer:0wrG929kjhROQ81c@cluster0-ykmvi.mongodb.net/test?retryWrites=true&w=majority",
 { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open',()=>{
  console.log("mongoose is connected")
})

app.use(cors());


app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema
}))


app.listen(process.env.PORT || 4000 , () => { //localhost: 4000
  console.log("listening for Request on port 4000");
});
