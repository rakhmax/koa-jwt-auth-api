import { User } from '../models'
import { Context } from 'koa';

const getUser = async (ctx: Context) => {
  if(!ctx.isAuth) {
    ctx.throw(401, 'Unauthorized')
  }

  try {
    const { firstname, lastname, email, phone } = await User.findById(ctx.userId)

    ctx.body = { firstname, lastname, email, phone }
  } catch (error) {
    throw error
  }
}

export default getUser
