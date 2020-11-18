const {Router} = require('express')
const config = require('config')
const Token = require('../models/Token')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/deploy', auth, async (req, res) => {
    try {
    
      const {address, type_abi} = req.body
  
      const existing = await Token.findOne({ address })
       
      const token = new Token({
        address, type_abi, owner: req.user.userId
      })
  
      await token.save()
  
      res.status(201).json({ token })
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/', auth, async(req, res)=>{
    try {
        const tokens = await Token.find({ owner: req.user.userId })
        res.json(tokens)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/:id', auth, async(req, res)=>{
    try {
        const token = await Token.findById(req.params.id)
        res.json(token)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router
