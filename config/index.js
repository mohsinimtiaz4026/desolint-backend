const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://imtiazmohsin56:dGMB8To7Aa30C5dY@cluster0.izyc6wp.mongodb.net/auth-system?retryWrites=true&w=majority`).then(() => console.log("db connected")).catch((err) => console.log(`db failed: ${err.message}`));

module.exports = mongoose;


