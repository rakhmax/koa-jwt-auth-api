import { User } from '../models'

const getUser = async (ctx: any) => {
  if(!ctx.isAuth) {
    ctx.throw(401, 'Unauthorized')
  }

  try {
    const { firstname, lastname, email, phone } = await User.findById(ctx.request.body.userId)

    ctx.body = { firstname, lastname, email, phone }
  } catch (error) {
    throw error
  }
}

export default getUser
