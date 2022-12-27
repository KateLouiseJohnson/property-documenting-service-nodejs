import express from 'express'
import controller from '../controllers/properties'
const router = express.Router()

router.post('/properties', controller.save)
router.get('/properties', controller.get)

export = router