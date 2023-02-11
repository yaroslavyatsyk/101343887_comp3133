const users = require('../models/users')

const express = require('express')

const router = express.Router()

router.post('/users', async(req, res) => {
    const addedUser = req.body;
    if(JSON.stringify(addedUser) == null || JSON.stringify(addedUser) == '{}') {
        return res.status(400).send({
            message: "User content can not be empty"
        });
    }
    else {
    try { 
        const user = new users(addedUser)
        await user.save()
        res.status(201, { message: "Successfully added user"}).send(user)
    }
    catch(error) {
        res.status(500).send(error.message)
    }
}
})

module.exports = router