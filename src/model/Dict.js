const mongoose = require('mongoose');

const DictSchema = new mongoose.Schema(
    {
        key: { type: Number },
        word: { type: String },
        mean: { type: String },
        option1: { type: String },
        option2: { type: String },
        option3: { type: String },
        exp: { type: String }
    }
)

const Dict = mongoose.model('Words', DictSchema)
module.exports = Dict