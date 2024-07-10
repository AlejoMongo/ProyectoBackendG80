require('dotenv').config();
const mongoose = require('mongoose');

const ConectarBD = () =>{
    mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Estamos conectados a mongodb"))
    .catch((err) => console.error(err))
}

module.exports = ConectarBD;