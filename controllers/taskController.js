// models
const User = require("../models/User");
const Vehicle = require("../models/Vehicle");
// validations
const validateVehicleSchema = require("../validations/vehicleValidation");

const authenticateUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(204).send({ status: 204, msg: 'Email & Password Cannot be Empty' });
        } else {
            if (await User.findOne({ email, password })) {
                res.status(200).send({ status: 200, msg: 'User Authenticated', data: { ...req.body } });
            } else {
                res.status(203).send({ status: 203, msg: 'Wrong Credentails' });
            }
        }
    } catch (error) {
        res.status(500).send({ msg: 'Internal Server Error' });
    }
}
const addVehicle = async (req, res) => {
    try {
        const { car_model, price, phone_number, city, images } = req.body;
        const { error } = await validateVehicleSchema.validate(req.body);
        if (error) {
            return res.status(204).send({ error: error.message });
        } else {
            if (req.body) {
                let userId = await User.find();
                let data = await Vehicle.create({
                    user_id: userId[0]._id,
                    car_model,
                    price,
                    phone_number,
                    city,
                    images,
                });
                await data.save();
                res.status(200).send({ status: 200, msg: 'Vehicle Added Successfully', data: { ...req.body } });
            } else {
                return res.status(204).send({ msg: "Something Went Wrong" })
            }
        }
    } catch (error) {
        res.status(500).send({ msg: `Internal Server Error: ${error.message}` });
    }
}
const uploadFiles = async (req, res) => {
    try {
        const files = req.files;
        console.log(files);
        var data = [];
        files.forEach((f) => {
            data.push(`${process.env.SERVER_URL}/uploads/${f.filename}`);
        })
        return res.status(200).send({ msg: "Uploaded Files", data: data });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}
module.exports = {
    authenticateUser,
    addVehicle,
    uploadFiles,
}