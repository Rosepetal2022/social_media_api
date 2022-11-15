const express = require('express');
const mongoose = require('mongoose');

const app = express ();
const PORT = process.env.PORT || 3001;

//middleware and bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes middleware
app.use(require('./routes'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/social_media_api', {
    useNewURLParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.listen(PORT, () => console.log(`Server running on ${PORT}`));