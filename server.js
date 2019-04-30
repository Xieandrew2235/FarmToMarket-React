// Dependencies/required packages
const express = "express";
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
// Const routes require here

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Route here
app.use('/api/');

mongoose.set("debug", true);
mongoose.connect(process.env.MONGODDB_URI || "mongodb://localhost/projectthree", {useNewUrlParser:true});

app.listen(PORT, function() {
    console.log('API server listening on ${PORT}');
});