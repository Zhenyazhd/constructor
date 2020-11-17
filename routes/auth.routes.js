const {Router} = require('express')
const bcrypt = require('bcrypt')
const User = require('../models/User')
const Token = require('../models/Token')
const config = require('config')
const jwt = require('jsonwebtoken')

const router = Router()

// /api/auth/register

router.post('/register', async (req, res) => {
    try { 
        const {address, password} = req.body
        
        const candidate = await User.findOne({ address })
        
        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' })
        }
       
        const hashedpassword = await bcrypt.hash(password, 12)

        const user = new User({ address: address, password: hashedpassword})
        
        await user.save()

        res.status(201).json({ message: 'Пользователь создан' })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так с пользователем, попробуйте снова' })
    }    
})

// /api/auth/login
router.post('/login', async (req, res) => {
    try{
        const {address, password} = req.body

        const user = await User.findOne({ address })

        if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        
        if (!isMatch) {
        return res.status(400).json({ message: 'Неверный токен, попробуйте снова' })
        }

        const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
        )

        res.json({ token: token, userId: user.id })

    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так с входом, попробуйте снова' })
    }
})


module.exports = router
