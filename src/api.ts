import Router from 'koa-router'
import {
  signup,
  login
} from './controllers'

const router = new Router()

router.post('/signup', signup)
router.post('/login', login)

export default router
