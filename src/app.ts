import Koa from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser';
import { PORT } from './config'
import database from './db'
import router from './api'

const app = new Koa()

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
