const express = require("express")
const router = express.Router()
const Hero = require("../model/Hero.model")

//get all hero list
router.get('/', (request, response) => {
    Hero.getHero(response);
})

//get hero by id
router.get('/:id', (request, response) => {
    const id = request.params.id
    Hero.getHeroById(id, response)
})

//update or edit hero
router.post('/update', (request, response) => {
    const data = {
        "id": request.body.id,
        "name": request.body.name,
        "role": request.body.role,
        "winrate": request.body.winrate,
        "title": request.body.title
    }
    Hero.updateHeroById(data, response)
})

router.post('/add', (request, response) => {
    const data = {
        "name": request.body.name,
        "role": request.body.role,
        "winrate": request.body.winrate,
        "title": request.body.title
    }
    Hero.addHero(data, response)
})

router.post('/remove', (request, response) => {
    const id = request.body.id
    Hero.removeHero(id, response)
})

module.exports = router