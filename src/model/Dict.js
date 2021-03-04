const mongoose = require('mongoose');

const DictSchema = new mongoose.Schema(
    {
        Word: { type: String },
        Meaning: { type: String },
        Option1: { type: String },
        Option2: { type: String },
        Option3: { type: String }
    }
)

const Dict = mongoose.model('Words', DictSchema)
module.exports = Dict