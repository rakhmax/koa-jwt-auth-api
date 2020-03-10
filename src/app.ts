import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import database from './db'
import router from './api'

const app = new Koa()

app.use(bodyParser())
app.use(cors())
app.use(router.routes())

database()

export default app
