const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  address: {type: String, required: true},
  type_abi: {type: String, required: true},
  owner: {type: Types.ObjectId, ref: 'User'}
})

module.exports = model('Token', schema)