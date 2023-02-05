const moongoose = require('mongoose')

const restaurantSchema = new moongoose.Schema({
    city: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    restaurant_id: {
        type: Number,
        required: true
    },
    address: {
        building: {
            type:  Number,
            required: true,

            validate(value) {
                if(value < 0) {
                throw new Error("Building number can not be negative")
                }
            }
         },
         street: {
            type: String,
            required: true
         },
         zipcode: {
            type: String
         }
    }



})

const Restaurant = moongoose.model("Restaurant",restaurantSchema)

module.exports = Restaurant



