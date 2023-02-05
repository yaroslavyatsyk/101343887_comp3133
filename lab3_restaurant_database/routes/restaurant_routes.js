const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

// Get all restaurants
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one restaurant by id
router.get('restaurants/:id', getRestaurant, (req, res) => {
  res.json(res.restaurant);
});

// Create a new restaurant
router.post('/restaurant', async (req, res) => {
  const restaurant = new Restaurant({
    city: req.body.city,
    cuisine: req.body.cuisine,
    name: req.body.name,
    restaurant_id: req.body.restaurant_id,
    address: req.body.address
  });

  try {
    const newRestaurant = await restaurant.save();
    res.status(201).json(newRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a restaurant by id
router.patch('/restaurants/:id', getRestaurant, async (req, res) => {
  if (req.body.city != null) {
    res.restaurant.city = req.body.city;
  }
  if (req.body.cuisine != null) {
    res.restaurant.cuisine = req.body.cuisine;
  }
  if (req.body.name != null) {
    res.restaurant.name = req.body.name;
  }
  if (req.body.restaurant_id != null) {
    res.restaurant.restaurant_id = req.body.restaurant_id;
  }
  if (req.body.address != null) {
    res.restaurant.address = req.body.address;
  }

  try {
    const updatedRestaurant = await res.restaurant.save();
    res.json(updatedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a restaurant by id
router.delete('/restaurants/:id', getRestaurant, async (req, res) => {
  try {
    await res.restaurant.remove();
    res.json({ message: 'Deleted This restaurant' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getRestaurant(req, res, next) {
    try {
      restaurant = await Restaurant.findById(req.params.id);
      if (restaurant == null) {
        return res.status(404).json({ message: 'Cannot find restaurant' });
      }
      res.restaurant = restaurant;
      next();
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  }
router.get('/restaurants/cuisine/:param', async(req,res) => {
    try {
        const restaurants = await Restaurant.find({cuisine: req.params.param})
  
        if (!restaurants) 
        {
          res.status(404).send(JSON.stringify({status: false, message:"No items found"}))
        }else{
          res.status(200).json(restaurants)
        }
      } catch (err) {
        res.status(500).send(err)
      }
})
router.get('/restaurants/sortBy', async (req, res) => {
    try {
      const restaurants = await Restaurant.find().sortBy(req.body.sortBy);
      res.json(restaurants);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
module.exports = router
    