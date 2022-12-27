import express from 'express'
import ping from './ping'
import properties from './properties'

const router = express.Router()

router.use(ping)
router.use(properties)

export = router