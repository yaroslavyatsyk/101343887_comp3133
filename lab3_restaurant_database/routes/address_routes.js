const express = require('express')
const router = express.Router()
const Address = require('../models/address')

// Create an address
router.post('/addresses', async (req, res) => {
    const address = new Address(req.body)
    try {
        await address.save()
        res.status(201).send(address)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Get all addresses
router.get('/addresses', async (req, res) => {
    try {
        const addresses = await Address.find({})
        res.send(addresses)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Get an address by id
router.get('/addresses/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const address = await Address.findById(_id)
        if (!address) {
            return res.status(404).send()
        }
        res.send(address)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Update an address
router.patch('/addresses/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['building', 'street', 'postalCode']
    const isValidUpdate = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidUpdate) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

        if (!address) {
            return res.status(404).send()
        }

        res.send(address)
    } catch (error) {
        res.status(400).send(error)
    }
})

// Delete an address
router.delete('/addresses/:id', async (req, res) => {
    try {
        const address = await Address.findByIdAndDelete(req.params.id)

        if (!address) {
            return res.status(404).send()
        }

        res.send(address)
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router
