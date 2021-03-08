const Dict = require('../model/Dict');
const medium = require('../model/Medium')
const adv = require('../model/Adv');
const express = require('express');
const { response } = require('express');

const router = new express.Router()


router.post('/basic', async (req, resp) => {
    const word = new Dict(req.body)
    try {
        await word.save()
        resp.send(word)
    }
    catch (e) {
        res.status(400).send(e)
    }
})
router.post('/medium', async (req, resp) => {
    const word = new medium(req.body)
    try {
        await word.save()
        resp.send(word)
    }
    catch (e) {
        res.status(400).send(e)
    }
})
router.post('/adv', async (req, resp) => {
    const word = new adv(req.body)
    try {
        await word.save()
        resp.send(word)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

router.get('/words', async (req, resp) => {
    console.log("hittt")
    Dict.find({}).then((a) => { resp.send(a) }).catch((e) => { res.status(400).send(e) })

})
router.get('/words/:index', async (req, resp) => {

    Dict.findOne({ key: req.params.index }).then((w) => {
        resp.send(w)
    }).catch((e) => {
        resp.status(400).send(e);
    })

})


router.get('/wordsCount/:index', async (req, res) => {

    const ind = req.params.index;
    var ind1 = parseInt(ind) + 999;

    Dict.find().where("key").gte(ind).lte(ind1).exec()
        .then((w) => {
            res.send(w)
        })

})
router.get('/basic/:index', async (req, res) => {

    const ind = req.params.index;
    var ind1 = parseInt(ind) + 999;

    Dict.find().where("key").gte(ind).lte(ind1).exec()
        .then((w) => {
            res.send(w)
        })

})
router.get('/medium/:index', async (req, res) => {

    const ind = req.params.index;
    var ind1 = parseInt(ind) + 999;

    medium.find().where("key").gte(ind).lte(ind1).exec()
        .then((w) => {
            res.send(w)
        })

})
router.get('/advance/:index', async (req, res) => {

    const ind = req.params.index;
    var ind1 = parseInt(ind) + 999;

    adv.find().where("key").gte(ind).lte(ind1).exec()
        .then((w) => {
            res.send(w)
        })

})



module.exports = router