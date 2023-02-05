const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');


// Create a new restaurant
router.post("/restaurants", async (req, res) => {
    const restaurant = new Restaurant(req.body)
    try {
        await restaurant.save()
        res.status(201).send(restaurant)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Read all restaurants
router.get("/restaurants", async (req, res) => {
    try {
        let sort = req.query.sortBy ? req.query.sortBy.toLowerCase() : 'asc';
        const sortOrder = sort === 'asc' ? 1 : -1;
        const restaurants = await Restaurant.find({}).sort({ restaurant_id: sortOrder });
        res.send(restaurants)
    } catch (error) {
        res.status(500).send(error)
    }
});

// Read a single restaurant by ID
router.get("/restaurants/:id", async (req, res) => {
    const _id = req.params.id
    try {
        const restaurant = await Restaurant.findById(_id)
        if (!restaurant) {
            return res.status(404).send()
        }
        res.send(restaurant)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Update a restaurant
router.patch("/restaurants/:id", async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ["city", "cuisine", "name", "restaurant_id", "address"]
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
    if (!isValidUpdate) {
        return res.status(400).send({ error: "Invalid updates!" })
    }
    try {
        const restaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        if (!restaurant) {
            return res.status(404).send()
        }
        res.send(restaurant)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Delete a restaurant
router.delete("/restaurants/:id", async (req, res) => {
    try {
        const restaurant = await Restaurant.findByIdAndDelete(req.params.id)
        if (!restaurant) {
            return res.status(404).send()
        }
        res.send(restaurant)
    } catch (error) {
        res.status(500).send(error)
    }
})
  
router.get("/restaurants/Delicatessen/all", async (req, res) => {
    try {
    const restaurants = await Restaurant.find({
    cuisines: "Delicatessen",
    city: { $ne: "Brooklyn" },
    })
    .select("cuisine name city")
    .sort("name");

    res.send(restaurants);
} catch (error) {
  res.status(500).json({ message: error.message });
}
});


module.exports = router
    