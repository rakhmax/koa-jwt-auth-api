import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import database from './db'
import router from './api'
import { isAuth } from './middleware'

const app = new Koa()

app.use(bodyParser())
app.use(cors())
app.use(isAuth)
app.use(router.routes())

database()

export default app
