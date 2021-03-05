const Dict = require('../model/Dict');

const express = require('express');
const { response } = require('express');
const router = new express.Router()

router.post('/words', async (req, resp) => {
    const word = new Dict(req.body)
    try {
        await word.save()
        resp.send(word)
    }
    catch (e) {
        res.status(400).send(e)
    }
})

// router.get('/words', async (req, resp) => {
//     console.log("hittt")
//     Dict.find({}).then((a) => { resp.send(a) }).catch((e) => { res.status(400).send(e) })

// })
router.get('/words/:index', async (req, resp) => {

    Dict.findOne({ key: req.params.index }).then((w) => {
        res.send(w)
    }).catch((e) => {
        res.status(400).send(e);
    })

})

module.exports = router