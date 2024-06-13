const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Types.ObjectId,
    },
    car_model: {
        type: String,
        minlength: 3,
    },
    price: {
        type: Number
    },
    phone_number: {
        type: Number,
        maxlength: 11,
    },
    city: {
        type: String,
    },
    images: {
        type: Array,
        validate: {
            validator: function (v) {
                return v.length >= 1 && v.length <= 10;
            },
            message: props => `${props.value} is not a valid number of images. Must be between 1 and 10.`
        }
    }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports = Vehicle;