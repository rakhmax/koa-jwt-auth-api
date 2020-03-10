import Router from 'koa-router'
import signup from './controllers/signup'
import login from './controllers/login'

const router = new Router()

router.post('/signup', signup)
router.post('/login', login)

export default router
