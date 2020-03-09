import * as Koa from 'koa'
import * as Router from 'koa-router'
import * as cors from '@koa/cors'
import * as bodyParser from 'koa-bodyparser';
import { PORT } from './config'
import database from './db'

const app = new Koa()
const router = new Router()

router.get('/', async (ctx) => {
  ctx.body = {
    name: 'Hello',
    sur: 'World'
  };
})

app.use(bodyParser())
app.use(cors())
app.use(router.routes())

database
  .then(() => {
    console.clear();
    app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));
  })
  .catch(error => {
    console.error('Unable to connect to database\n');
    console.error(error);
    process.exit(1);
  })

export default app;
