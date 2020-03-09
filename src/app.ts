import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as cors from '@koa/cors'
import { PORT } from './config'
const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = {
        name: 'Hello',
        sur: 'World'
    };
});

router.post('/posts', async ctx => {
    ctx.body = {
        msg: 'Works'
    }
})

app.use(cors())
app.use(router.routes());

app.listen(PORT);

console.log(`Server is running in http://localhost:${PORT}`);
