const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    address: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    tokens: [{ type: Types.ObjectId, ref: 'Token' }]
})

module.exports = model('User', schema)

