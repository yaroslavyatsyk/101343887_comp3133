const mongoose = require('mongoose')

const AddresSchema = new mongoose.Schema({
    building: {
        type: Number,

        validate(value) {
            if(value < 0) {
                throw new Error("Can not be negative number")
            }
        }
    },

    street: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
    }
})

const addressModel = mongoose.model("Address",AddresSchema)

module.exports = addressModel