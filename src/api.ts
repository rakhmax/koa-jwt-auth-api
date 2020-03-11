import Router from 'koa-router'
import {
  getUser,
  signup,
  login
} from './controllers'

const router = new Router()

router.post('/signup', signup)
router.post('/login', login)
router.post('/user', getUser)

export default router
