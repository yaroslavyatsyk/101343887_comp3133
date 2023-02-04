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
        type: String,
        required: true
    },
    address: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }



})

const Restaurant = moongoose.model("Restaurant",restaurantSchema)

module.exports = Restaurant