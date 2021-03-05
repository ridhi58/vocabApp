const mongoose = require('mongoose');

const DictSchema = new mongoose.Schema(
    {
        Key: { type: Number },
        Word: { type: String },
        Meaning: { type: String },
        Option1: { type: String },
        Option2: { type: String },
        Option3: { type: String },
        exp: { type: String }
    }
)

const Dict = mongoose.model('Words', DictSchema)
module.exports = Dict