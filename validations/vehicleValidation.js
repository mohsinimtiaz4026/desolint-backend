const Yup = require("yup");

const validateVehicleSchema = Yup.object({
    car_model: Yup.string().min(3).required(),
    price: Yup.number().required(),
    phone_number: Yup.string().matches(/^[0-9]{11}$/).required(),
    city: Yup.string().required(),
    images: Yup.array().of(Yup.string().url()).min(1).max(10)
});

module.exports = validateVehicleSchema;