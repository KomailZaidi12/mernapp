const express = require('express')
const router = express.Router()

router.post('/foodData', (req, res) =>{
    try {
        // console.log(global.foodCategory)
        res.send([global.food_items, global.foodCategory])
    } catch (error) {
        res.send("Server Error")
        console.error(error.message)
    }
})

module.exports = router;